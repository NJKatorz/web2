import { clearPage }from '../../utils/render';

const HomePage = () => {
    clearPage();
    renderHomePage();
};

async function renderHomePage(){
  const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  const jokes = await response.json();

  const main = document.querySelector('main');
  const div = document.createElement('div');

  div.innerHTML = `<h1> Catégorie </h1> <p> ${jokes.category} <p/> 
  <h1> Texte </h1> <p> ${jokes.joke} <p/> 
  `
  main.appendChild(div);
  // main.innerHTML = ` <h1> Texte </h1>`;
}


export default HomePage;
