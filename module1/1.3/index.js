const div = document.querySelector("div");
const compteur = document.querySelector(".compteur");
const button = document.createElement("button");
const divButton = document.querySelector(".bouton");
let cpt = 0;

const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15

div.innerHTML = `<p> date = ${dateTimeNow.toLocaleDateString()} </p> 
<p> heure = ${dateTimeNow.toLocaleTimeString()} </p>`
button.type = "button";
button.innerHTML = `Click`;

button.addEventListener("click", () => {
    cpt++;
    if(cpt>=5 && cpt<=9){
        compteur.innerHTML = `<p> Nombre de clics = ${cpt} </p>
        <p> Bravo, bel échauffement ! </p>`;
    }else if(cpt>=10){
            compteur.innerHTML = `<p> Nombre de clics = ${cpt} </p>
        <p> Vous êtes passé maître en l'art du clic ! </p>`;
        }
        else{
            compteur.innerHTML = `<p> Nombre de clics = ${cpt} </p>`
        }
  });

divButton.appendChild(button);

