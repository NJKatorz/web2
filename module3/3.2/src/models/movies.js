
const MOVIES = [
    {
        title: 'Harry Potter and the Philosopher\'s Stone',
        duration: 152,
        budget: 125,
        link: 'https://amazing-javascript.world',
    },
    {
        title: 'Avengers: Endgame',
        duration: 181,
        budget: 181,
        link: 'https://en.wikipedia.org/wiki/Avengers:_Endgame',
    }
];

function readAllMovies(){
    return MOVIES;
}

function addMovies(movie){
    MOVIES.push(movie)
}

export {readAllMovies, addMovies}