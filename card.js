async function drawCard() {
	const imageUrl = await fetchCard();
	updateUI(imageUrl);
}

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
	let img = document.createElement('img');
	img.src = data;
	cardHolder.appendChild(img);
}

export default drawCard;
