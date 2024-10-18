//New object oriented code

class Card {
	uri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

	async fetchCard() {
		try {
			let response = await fetch(this.uri);
			if (!response.ok) throw new Error('Error fetching data: ' + response.status);

			let card = await response.json();
			return card.cards[0].image;
		} catch (error) {
			console.log(error);
		}
	}

	async updateCardUI() {
		const cardHolder = document.querySelector('#cardHolder');
		cardHolder.innerHTML = '';
		let img = document.createElement('img');
		img.src = await fetchCard();
		cardHolder.appendChild(img);
	}
}

export default Card;

// Old functional code

async function fetchCard() {
	const uri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
	let response = await fetch(uri);
	let card = await response.json();
	if (card.success) {
		const imageUrl = card.cards[0].image;
		return imageUrl;
	} else {
		console.log('Card not found.');
	}
}

function updateUI(data) {
	const cardHolder = document.querySelector('#cardHolder');
	cardHolder.innerHTML = '';
	let img = document.createElement('img');
	img.src = data;
	cardHolder.appendChild(img);
}

async function drawCard() {
	const imageUrl = await fetchCard();
	updateUI(imageUrl);
}
