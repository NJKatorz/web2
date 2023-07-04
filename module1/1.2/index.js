
const div = document.querySelector("div")

const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15

div.innerHTML = `<p> date = ${dateTimeNow.toLocaleDateString()} </p> 
<p> heure = ${dateTimeNow.toLocaleTimeString()} </p>`