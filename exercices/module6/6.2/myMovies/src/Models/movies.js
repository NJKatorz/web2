/**
 const tableMovies = [];

const readAllMovies = () => tableMovies;

const addOneMovie = (movie) => {
    tableMovies.push(movie);
};
*/


const readAllMovies = async () => {
    const response = await fetch('/api/films');
    if (!response.ok) {
        throw new Error(`readAllMovies:: fetch error : ${response.status} : ${response.statusText}`);
      }

      const movies = await response.json();
      
      return movies;
    
};


const addOneMovie = async (movie) => {

        const options = {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json',
          },
        };
    
        const response = await fetch('/api/films', options);
    
        if (!response.ok) {
          throw new Error(`addOneMovie :: fetch error : ${response.status} : ${response.statusText}`);
        }
        const filmAdded = await response.json();
    
        return filmAdded;
      
};

export {addOneMovie, readAllMovies};