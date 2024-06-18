let apiKey = "3f8a3568";
let myButton = document.getElementById("btn");

myButton.addEventListener("click", (event) => {
  event.preventDefault();

  let inputField = document.getElementById("inputField");
  let searchQuery = inputField.value;
  let URL = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

  async function getMyfilms() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const films = data.Search;

      document.getElementById("films").innerHTML = "";

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

      inputField.value = "";
      inputField.focus();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  getMyfilms();
});
