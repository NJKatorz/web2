const dateNow = new Date();

let realMessage = "This is the best moment to have a look at this website !"

function addDateTime(message){
    return dateNow.toLocaleDateString() + " " + dateNow.toLocaleTimeString()+ " " + message;
}

let resultat = addDateTime(realMessage);
console.log(resultat);
alert(resultat);