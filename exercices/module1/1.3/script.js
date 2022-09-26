let compteur = 0;
let btn = document.querySelector('.btn')
let cpt = document.querySelector('.cpt');
let message = document.querySelector('.message');

btn.addEventListener('click', () => {
    compteur++;
    cpt.textContent = compteur;
    if(compteur === 5){
        message.textContent = "Bravo, bel échauffement !";
    }else
        if(compteur === 10){
            message.textContent = "Vous êtes passé maître en l'art du clic !";
        }
});