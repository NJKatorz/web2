// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { readAllMovies, deleteOneMovie, updateOneMovie } from '../../models/movies';


const ViewMoviesPage = async() => {
    clearPage();
    await getMovies();
   
};

async function getMovies(){
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.id = "movieWrapper";
    const movie = await readAllMovies();
    div.innerHTML = renderViewMovies(movie);
    main.appendChild(div);
    attachEventListeners();
}

function renderViewMovies(movies) {
    let moviesTable = `
    <div class="table-responsive pt-5">
      <table class="table table-danger">
        <tr>
          <th>Title</th>
          <th>Link</th>
          <th>Duration (min)</th>
          <th>Budget (million)</th>
          <th scope="col" colspan="2">Operations</th>
        </tr>
    `;

    movies?.forEach((film) => {
        moviesTable += `<tr>
          <td class="fw-bold text-info" contenteditable="true">${film.title}</td>
          <td><a href="${film.link}">${film.link}</a></td>
          <td>${film.duration}</td>
          <td>${film.budget}</td>
          <td><button type="button" class="btn btn-info delete" data-element-id="${film.id}">DELETE</button></td>
          <td><button type="button" class="btn btn-info update" data-element-id="${film.id}">SAVE</button></td>
        </tr>`;
      });
    

    return moviesTable;
}

function attachEventListeners() {
  const movieWrapper = document.querySelector('#movieWrapper');
  
  movieWrapper.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;
      await deleteOneMovie(elementId);
      ViewMoviesPage();
    });
  });

  movieWrapper.querySelectorAll('.update').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;

      const filmRow = e.target.parentElement.parentElement;
      const newFilmData = {
        title: filmRow.children[0].innerHTML,
        link: filmRow.children[1].innerText, // it's is a link that we change, not directly the td
        duration: Number.parseInt(filmRow.children[2].innerHTML, 10),
        budget: Number.parseInt(filmRow.children[3].innerHTML, 10),
      };
      await updateOneMovie(elementId, newFilmData);
      ViewMoviesPage();
    });
  });
}

export default ViewMoviesPage;
