const {
    url
} = require('inspector');
const fetch = require('node-fetch');

// then e catch
// const fetchJoke = () => {
//     const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Deu ruim \n ${error}`));
// }

// fetchJoke();

// async e await com tehn e catch
// const fetchJoke = async () => {
//     const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//     const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Deu ruim \n ${error}`);

//     console.log(result);
// }
// fetchJoke();

// async e await com try e catch
const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.value);
    } catch(error) {
        console.log(`Deu ruim \n ${error}`);
    }
}
fetchJoke();