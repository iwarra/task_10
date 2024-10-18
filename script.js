import drawCard from './card.js';
import getApi from './starwars.js';

/////Part 1
const infoButton = document.querySelector('#getInfoBtn');
infoButton.addEventListener('click', (e) => {
	e.preventDefault();
	getApi();
});

///////Part 2
const cardButton = document.querySelector('#drawBtn');
cardButton.addEventListener('click', async (e) => {
	e.preventDefault();
	await drawCard();
});
