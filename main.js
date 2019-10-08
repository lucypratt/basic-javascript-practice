import { films } from '/assets/films.js';

console.log(films[0].opening_crawl);

let mainSection = document.querySelector('main');

let film1 = document.createElement('div');
let film2 = document.createElement('div');
let film3 = document.createElement('div');
let film4 = document.createElement('div');
let film5 = document.createElement('div');
let film6 = document.createElement('div');
let film7 = document.createElement('div');

film1.textContent = films[0].opening_crawl;
film2.textContent = films[1].opening_crawl;
film3.textContent = films[2].opening_crawl;
film4.textContent = films[3].opening_crawl;
film5.textContent = films[4].opening_crawl;
film6.textContent = films[5].opening_crawl;
film7.textContent = films[6].opening_crawl;

mainSection.appendChild(film1);
mainSection.appendChild(film2);
mainSection.appendChild(film3);
mainSection.appendChild(film4);
mainSection.appendChild(film5);
mainSection.appendChild(film6);
mainSection.appendChild(film7);