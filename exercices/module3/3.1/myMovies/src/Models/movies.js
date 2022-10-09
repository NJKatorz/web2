const tableMovies = [];

const readAllMovies = () => tableMovies;

const addOneMovie = (movie) => {
    tableMovies.push(movie);
};

export {addOneMovie, readAllMovies};