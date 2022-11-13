/* eslint-disable no-console */
/**
 const tableMovies = [];

const readAllMovies = () => tableMovies;

const addOneMovie = (movie) => {
    tableMovies.push(movie);
};
*/

import { getAuthenticatedUser } from '../utils/auths';


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

async function deleteOneMovie(id) {
  if (!id) return undefined;

  try {
    const authenticatedUser = getAuthenticatedUser();

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authenticatedUser.token,
      },
    };

    const response = await fetch(`/api/films/${id}`, options);

    if (!response.ok) {
      throw new Error(`deleteOneFilm :: fetch error : ${response.status} : ${response.statusText}`);
    }
    const deletedFilm = await response.json();
    return deletedFilm;
  } catch (err) {
    console.error('deleteOneMovie::error: ', err);
    throw err;
  }
}

async function updateOneMovie(id, newMovieData) {
  if (!id || !newMovieData) return undefined;

  try {
    const authenticatedUser = getAuthenticatedUser();

    const options = {
      method: 'PATCH',
      body: JSON.stringify(newMovieData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: authenticatedUser.token,
      },
    };

    const response = await fetch(`/api/films/${id}`, options); // fetch return a promise => we wait for the response

    if (!response.ok) {
      throw new Error(
        `updateOneMovie :: fetch error : ${response.status} : ${response.statusText}`,
      );
    }
    const updatedFilm = await response.json(); // json() returns a promise => we wait for the data

    return updatedFilm;
  } catch (err) {
    console.error('updateOneMovie::error: ', err);
    throw err;
  }
}

export { readAllMovies, addOneMovie, deleteOneMovie, updateOneMovie };
