const HomePage = async () => {
  const main = document.querySelector('main');
  
  // Site AnimeChan
  /** 
  const response = await fetch('https://animechan.vercel.app/api/random');

  const animechan = await response.json();

  const div = document.createElement('div');

  div.innerHTML = `
  Anime = ${animechan.anime}<br>
  Character = ${animechan.character}<br>
  Quote = ${animechan.quote}`

  main.appendChild(div);
  */

  // Site JokeAPI
  const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');

  const jokeapi = await response.json();

  const div = document.createElement('div');

  div.innerHTML = `
  Category = ${jokeapi.category}<br>
  Joke = ${jokeapi.joke}`

  main.appendChild(div);


};

export default HomePage;
