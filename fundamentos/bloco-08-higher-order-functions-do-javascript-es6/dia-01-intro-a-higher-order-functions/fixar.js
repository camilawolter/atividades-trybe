const wakeUp = () => 'Acordado!!';

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
    const frase = func();
    console.log(frase);
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);