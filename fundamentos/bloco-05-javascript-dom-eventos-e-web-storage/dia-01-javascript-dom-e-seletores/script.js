// Exercício 1
function textoParagraph () {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerText = "texto texto texto texto texto texto texto texto texto texto texto texto";
}
textoParagraph();

// Exercício 2
function quadradoVerde () {
    let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
    quadradoAmarelo.style.background = 'rgb(76,164,109)';
}
quadradoVerde();

// Exercício 3
function quadradoBranco () {
    let quadradoVermelho = document.getElementsByClassName('center-content')[0];
    quadradoVermelho.style.background = 'white';
}
quadradoBranco();


document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript';