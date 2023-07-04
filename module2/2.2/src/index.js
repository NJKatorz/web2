/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import photo from "./img/allmight.png";

const main = document.querySelector("main");

// Génération d'HTML à partir de nodes

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const img = document.createElement("img");

div1.innerHTML = `<p> Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. 
quae singula narrare non refert, me professione modum, quod evitandum est, excedamus. </p>`;

div2.innerHTML = `<p> Cumque pertinacius ut legum gnarus accusatorem flagitaret atque sollemnia, doctus id Caesar libertatemque superbiam ratus 
tamquam obtrectatorem audacem excarnificari praecepit, qui ita evisceratus ut cruciatibus membra deessent, inplorans caelo iustitiam, torvum renidens 
fundato pectore mansit inmobilis nec se incusare nec quemquam alium passus et tandem nec confessus nec confutatus cum abiecto consorte poenali est morte 
multatus. et ducebatur intrepidus temporum iniquitati insultans, 
imitatus Zenonem illum veterem Stoicum qui ut mentiretur quaedam laceratus diutius, 
avulsam sedibus linguam suam cum cruento sputamine in oculos interrogantis Cyprii regis inpegit. </p>`;

img.src = photo;

main.appendChild(div1);
main.appendChild(div2);
main.appendChild(img);
/*
// Génération d'HTML à partir d'une string

main.innerHTML = `
<p> Post quorum necem nihilo lenius ferociens Gallus ut leo cadaveribus pastus multa huius modi scrutabatur. 
quae singula narrare non refert, me professione modum, quod evitandum est, excedamus. </p>

<p> Cumque pertinacius ut legum gnarus accusatorem flagitaret atque sollemnia, doctus id Caesar libertatemque superbiam ratus 
tamquam obtrectatorem audacem excarnificari praecepit, qui ita evisceratus ut cruciatibus membra deessent, inplorans caelo iustitiam, torvum renidens 
fundato pectore mansit inmobilis nec se incusare nec quemquam alium passus et tandem nec confessus nec confutatus cum abiecto consorte poenali est morte 
multatus. et ducebatur intrepidus temporum iniquitati insultans, 
imitatus Zenonem illum veterem Stoicum qui ut mentiretur quaedam laceratus diutius, 
avulsam sedibus linguam suam cum cruento sputamine in oculos interrogantis Cyprii regis inpegit. </p>

<img src ="${photo}" />
`;
*/