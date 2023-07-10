// import Navigate from '../Router/Navigate';
import { clearPage } from '../../utils/render';
import { readAllMovies } from '../../models/movies'


const ViewMoviesPage = () => {
    clearPage();
    getMovies();
   
};



function getMovies(){
    const main = document.querySelector("main");
    const div = document.createElement("div");
    const movie = readAllMovies();
    div.innerHTML = renderViewMovies(movie);
    main.appendChild(div);
    
    // renderGoBackHomeButton();

}


function renderViewMovies(movies) {
    let moviesTable = `
    <div class="table-responsive pt-5">
      <table class="table table-danger">
        <tr>
          <th>Title</th>
          <th>Duration (min)</th>
          <th>Budget (million)</th>
        </tr>
    `;

    movies?.forEach((film) => {
        moviesTable += `<tr>
          <td><a href="${film.link}">${film.title}</a></td>
          <td>${film.duration}</td>
          <td>${film.budget}</td>
        </tr>`;
      });
    

    return moviesTable;
}
/** 
function renderGoBackHomeButton() {
    const main = document.querySelector('main');
    const submit = document.createElement('input');
    submit.value = 'Go back to HomePage';
    submit.className = 'btn btn-secondary mt-3';
    submit.addEventListener('click', () => {
        Navigate('/');
    });

    main.appendChild(submit);
}
*/
export default ViewMoviesPage;
