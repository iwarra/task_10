const button = document.querySelector('#button');

function getApi() {
	const input = document.querySelector('#name');
	const name = input.value.trim();
	let fullUri = 'https://www.swapi.tech/api/people/?name=' + encodeURIComponent(name);
	fetch(fullUri)
		.then((res) => {
			if (res.ok) return res.json();
			else throw new Error('Error fetching data:' + res.status);
		})
		.then((data) => {
			console.log(data);
			//display the following properties: height, mass, gender and hair_color
			//get result and add HTML and the text to it
		})
		.catch((err) => console.log(err));
}

button.addEventListener('click', getApi);

// Response from Postman
/*
{
    "message": "ok",
    "result": [
        {
            "properties": {
                "height": "228",
                "mass": "112",
                "hair_color": "brown",
                "skin_color": "unknown",
                "eye_color": "blue",
                "birth_year": "200BBY",
                "gender": "male",
                "created": "2024-10-16T23:58:13.114Z",
                "edited": "2024-10-16T23:58:13.114Z",
                "name": "Chewbacca",
                "homeworld": "https://www.swapi.tech/api/planets/14",
                "url": "https://www.swapi.tech/api/people/13"
            },
            "description": "A person within the Star Wars universe",
            "_id": "5f63a36eee9fd7000499be4e",
            "uid": "13",
            "__v": 0
        }
    ]
}
*/
