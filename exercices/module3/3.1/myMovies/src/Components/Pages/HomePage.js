/* eslint-disable import/no-unresolved */
/* eslint-disable import/first */



import cinema from '../../img/cinema.jpg';
import deku from '../../img/DEku.jpg';
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


const homePage = `
<div>
 <img src="${cinema}" alt="">
<p>Seruius quoque Sulpicius in libro quem composuit de dotibus tum primum cautiones rei uxoriae necessarias esse uisas scripsit, cum Spurius Caruilius, cui Ruga cognomentum fuit, uir nobilis, diuortium cum uxore fecit, quia liberi ex ea corporis uitio non gignerentur, anno urbis conditae quingentesimo uicesimo tertio M. Atilio P. Valerio consulibus. Atque is Caruilius traditur uxorem, quam dimisit, egregie dilexisse carissimamque morum eius gratia habuisse, set iurisiurandi religionem animo atque amori praeuertisse, quod iurare a censoribus coactus erat uxorem se liberum quaerundum gratia habiturum.
    Repudium inter uxorem et uirum a condita urbe usque ad centesimum et quinquagesimum annum nullum intercessit. primus autem Sp. Caruilius uxorem sterilitatis causa dimisit. qui, quamquam tolerabili ratione motus uidebatur, reprehensione tamen non caruit, quia ne cupiditatem quidem liberorum coniugali fidei praeponi debuisse arbitrabantur.</p>
<img src="${deku}" alt="">
<h1>Lets goooo</h1> 
</div>`;

const HomePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = homePage;
};

export default HomePage;
