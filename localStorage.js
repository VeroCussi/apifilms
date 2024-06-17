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
      `;
      filmDetailsContainer.innerHTML = myHtml;
  } else {
      console.error("No film details found in localStorage.");
  }
});
