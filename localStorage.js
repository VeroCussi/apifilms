//Recuperar los datos desde Local Storage

document.addEventListener('DOMContentLoaded', function() {
  let filmDetails = localStorage.getItem('filmDetails');
  if (filmDetails) {
      let film = JSON.parse(filmDetails);
      let filmDetailsContainer = document.getElementById("filmDetails");
      let myHtml = `
          <h2>${film.Title}</h2>
          <img src="${film.Poster}" alt="Poster de ${film.Title}">
          <p><strong>Year:</strong> ${film.Year}</p>
          <p><strong>Type:</strong> ${film.Type}</p>
          <p><strong>Released:</strong> ${film.Released}</p>
          <p><strong>Director:</strong> ${film.Director}</p>
          <p><strong>Actors:</strong> ${film.Actors}</p>
          <p><strong>Genre:</strong> ${film.Genre}</p>
          <p><strong>Plot:</strong> ${film.Plot}</p>
        <button id="clearCart" class="saved-button">Clear Cart</button>

      `;
      filmDetailsContainer.innerHTML = myHtml;
  } else {
      console.error("No film details found in localStorage.");
  }

// Limpiar el carrito

    document.getElementById("clearCart").addEventListener("click", function() {
        localStorage.removeItem('filmDetails');
        alert("Produit supprimé!");
        document.getElementById("filmDetails").innerHTML = '';
    });
});


// Codigo para hacer que el input del nav funcione
let apiKey = "3f8a3568";
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
          filmsContainer.innerHTML = ''; // Limpia los resultados anteriores para que no se acumulen, queda mejor así.
  
          for (const film of films) {
            const myHtml = `
                          <a href="localstorage.html?id=${film.imdbID}" class="film-link">
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

