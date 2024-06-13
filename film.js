//Pagina 2 con la descripción del film

let apiKey = "3f8a3568";

let urlParams = new URLSearchParams(window.location.search); 
let filmId = urlParams.get("id"); 

function fetchFilmDetails() {
  let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${filmId}`;
  fetch(url)
    .then((response) => response.json())
    .then((film) => {
      let filmDetailsContainer = document.getElementById("filmDetails");
      let myHtml = `
                <h2>${film.Title}</h2>
                <img src="${film.Poster}" alt="Poster de ${film.Title}">
                <p><strong>Year:</strong> ${film.Year}</p>
                <p><strong>Type:</strong> ${film.Type}</p>
                <p><strong>Genre:</strong> ${film.Genre}</p>
                <p><strong>Plot:</strong> ${film.Plot}</p>
                
            `;
      filmDetailsContainer.innerHTML = myHtml;
    })
    .catch((error) => {
      console.error("Error", error);
    });
}

fetchFilmDetails();

/*

Versión función async

let urlParams = new URLSearchParams(window.location.search); //ejemplo: https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
let filmId = urlParams.get("id"); // ejemplo sintax: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get

async function fetchFilmDetails() {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${filmId}`;
    try {
        const response = await fetch(url);
        const film = await response.json();
        
        const filmDetailsContainer = document.getElementById('filmDetails');
        const myHtml = `
            <h2>${film.Title}</h2>
            <p>Year: ${film.Year}</p>
            <p>Type: ${film.Type}</p>
            <p>Genre: ${film.Genre}</p>
            <p>Plot: ${film.Plot}</p>
            <img src="${film.Poster}" alt="Poster de ${film.Title}">
        `;
        filmDetailsContainer.innerHTML = myHtml;
    } catch (error) {
        console.error("Error", error);
    }
}

fetchFilmDetails();

*/
