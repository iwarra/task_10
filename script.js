const button = document.querySelector('#button');
const result = document.querySelector('#result');
const nameError = document.querySelector('#nameError');

function getApi() {
	const input = document.querySelector('#name');
	if (!validateInput(input, nameError)) return;
	const name = input.value.trim();
	const fullUri = 'https://www.swapi.tech/api/people/?name=' + encodeURIComponent(name);
	fetch(fullUri)
		.then((res) => {
			if (res.ok) return res.json();
			else throw new Error('Error fetching data:' + res.status);
		})
		.then((data) => {
			const creature = data.result[0];
			result.innerText = `${name} has height: ${creature.properties.height}, mass: ${creature.properties.mass}, hair color: ${creature.properties.hair_color} and is ${creature.properties.gender}.`;
			input.value = '';
		})
		.catch((err) => console.log(err));
}

button.addEventListener('click', (e) => {
	e.preventDefault();
	getApi();
});

function validateInput(inputEl, messageEl, minLength = 2) {
	const value = inputEl.value.trim();
	messageEl.innerText = ''; // Clear previous error messages

	if (value.length < minLength) {
		messageEl.innerText = `Input must be at least ${minLength} characters long.`;
		return false;
	}

	return true;
}
