let apiKey = "3f8a3568";
let urlParams = new URLSearchParams(window.location.search);
let filmId = urlParams.get("id");

function fetchFilmDetails() {
  let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${filmId}`;
  fetch(url)
    .then((response) => response.json())
    .then((film) => {
      localStorage.setItem("filmDetails", JSON.stringify(film));

      let filmDetailsContainer = document.getElementById("filmDetails");
      let myHtml = `
                <h2>${film.Title}</h2>
                <img src="${film.Poster}" alt="Poster de ${film.Title}">
                <p><strong>Year:</strong> ${film.Year}</p>
                <p><strong>Type:</strong> ${film.Type}</p>
                <p><strong>Genre:</strong> ${film.Genre}</p>
                <p><strong>Plot:</strong> ${film.Plot}</p>
                <button id="viewSavedFilm" class="saved-button">View Saved Film Details</button>
            `;
      filmDetailsContainer.innerHTML = myHtml;

      document
        .getElementById("viewSavedFilm")
        .addEventListener("click", function () {
          window.location.href = "localstorage.html";
        });
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

fetchFilmDetails();

function searchFilms(event) {
  event.preventDefault();

  let searchQuery = document.getElementById("inputField").value;

  let URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

  function getMyfilms() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let films = data.Search;
        let filmsContainer = document.getElementById("films");
        filmsContainer.innerHTML = "";

        for (const film of films) {
          const myHtml = `
                          <a href="film.html?id=${film.imdbID}" class="film-link">
                              <article class="film-card">
                                  <h2>Title: ${film.Title}</h2>
                                  <p>Year: ${film.Year}</p>
                                  <p>Type: ${film.Type}</p>
                                  <img src="${film.Poster}" alt="Poster de ${film.Title}">
                              </article>
                          </a>`;
          filmsContainer.innerHTML += myHtml;
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  getMyfilms();
}

let myButton = document.getElementById("btn");
myButton.addEventListener("click", searchFilms);
