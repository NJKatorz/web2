import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import cinema from './img/cinema.jpg';
import deku from './img/DEku.jpg';

/* soluce 1
const hompage = 
`<main>
 <img src="${cinema}" alt="">
<p>Seruius quoque Sulpicius in libro quem composuit de dotibus tum primum cautiones rei uxoriae necessarias esse uisas scripsit, cum Spurius Caruilius, cui Ruga cognomentum fuit, uir nobilis, diuortium cum uxore fecit, quia liberi ex ea corporis uitio non gignerentur, anno urbis conditae quingentesimo uicesimo tertio M. Atilio P. Valerio consulibus. Atque is Caruilius traditur uxorem, quam dimisit, egregie dilexisse carissimamque morum eius gratia habuisse, set iurisiurandi religionem animo atque amori praeuertisse, quod iurare a censoribus coactus erat uxorem se liberum quaerundum gratia habiturum.
    Repudium inter uxorem et uirum a condita urbe usque ad centesimum et quinquagesimum annum nullum intercessit. primus autem Sp. Caruilius uxorem sterilitatis causa dimisit. qui, quamquam tolerabili ratione motus uidebatur, reprehensione tamen non caruit, quia ne cupiditatem quidem liberorum coniugali fidei praeponi debuisse arbitrabantur.</p>
<img src="${deku}" alt="">
<h1>Lets goooo</h1> </main>`;

const main = document.querySelector('main');

main.innerHTML = hompage;

*/

renderAImage(cinema);
renderAImage(deku);

function renderAImage(image){
    const img = document.createElement('img');
    img.src = image;
    const main = document.querySelector('main');
    main.appendChild(img);
}

const myText = "Seruius quoque Sulpicius in libro quem composuit de dotibus tum primum cautiones rei uxoriae necessarias esse uisas scripsit, cum Spurius Caruilius, cui Ruga cognomentum fuit, uir nobilis, diuortium cum uxore fecit, quia liberi ex ea corporis uitio non gignerentur, anno urbis conditae quingentesimo uicesimo tertio M. Atilio P. Valerio consulibus. Atque is Caruilius traditur uxorem, quam dimisit, egregie dilexisse carissimamque morum eius gratia habuisse, set iurisiurandi religionem animo atque amori praeuertisse, quod iurare a censoribus coactus erat uxorem se liberum quaerundum gratia habiturum. Repudium inter uxorem et uirum a condita urbe usque ad centesimum et quinquagesimum annum nullum intercessit. primus autem Sp. Caruilius uxorem sterilitatis causa dimisit. qui, quamquam tolerabili ratione motus uidebatur, reprehensione tamen non caruit, quia ne cupiditatem quidem liberorum coniugali fidei praeponi debuisse arbitrabantur."

renderAText(myText)

function renderAText(text){
    const divText = document.createElement('div');
    const main = document.querySelector('main');
    main.appendChild(divText);
    divText.append(text)

}