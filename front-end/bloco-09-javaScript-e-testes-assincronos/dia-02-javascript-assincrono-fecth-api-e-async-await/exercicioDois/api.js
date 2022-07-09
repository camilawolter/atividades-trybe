// const fetch = require('node-fetch');

const fetchCoins = async () => {
    const url = `https://api.coincap.io/v2/assets`;

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());

    // console.log(coins);
    return coins;
}

const setCoins = async () => {
    const coins = await fetchCoins();

    const listCoins = document.getElementById('coins-list');

    coins
        .filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) => {
            const newLi = document.createElement('li');
            const price = Number(coin.priceUsd);

            newLi.innerText = `${coin.name} (${coin.symbol}): ${price.toFixed(2)}`;

            listCoins.appendChild(newLi);
        });
}

window.onload = () => setCoins();