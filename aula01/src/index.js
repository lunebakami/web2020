import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

// let heroesList = document.createElement('ul');

// let heroOne = document.createElement('li');
// let hero = document.createTextNode('Deku');
// heroOne.appendChild(hero);

// let heroTwo = document.createElement('li');
// hero = document.createTextNode('Bakugou');
// heroTwo.appendChild(hero);

// let heroThree = document.createElement('li');
// hero = document.createTextNode('All Might');
// heroThree.appendChild(hero);

// heroesList.appendChild(heroOne);
// heroesList.appendChild(heroTwo);
// heroesList.appendChild(heroThree);

// root.appendChild(heroesList);

ReactDOM.render(
  <ul>
    <li>Deku</li>
    <li>Kirishima</li>
    <li>All Might</li>
  </ul>
,root);