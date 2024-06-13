let apiKey = "3f8a3568";
let myButton = document.getElementById("btn");

myButton.addEventListener("click", (event) => {
  event.preventDefault();

  let searchQuery = document.getElementById("inputField").value;
  let URL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

  function getMyfilms() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let films = data.Search;

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
          document.getElementById("films").innerHTML += myHtml;
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  getMyfilms();
});
