const divRed = document.querySelector(".red");
const divOrange = document.querySelector(".orange");
const divGreen = document.querySelector(".green")

divRed.style.backgroundColor = "red"

setTimeout(() => {
    divOrange.style.backgroundColor = "orange"
  }, 3000);

  setTimeout(() => {
    divGreen.style.backgroundColor = "green"
  }, 6000);  



