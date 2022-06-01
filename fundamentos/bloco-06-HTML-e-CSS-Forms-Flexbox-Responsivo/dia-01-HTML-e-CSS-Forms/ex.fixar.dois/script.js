// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function getLink(evento) {
    evento.preventDefault();
}
HREF_LINK.addEventListener('click', getLink);


function getCheck(evento) {
    evento.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', getCheck);


function getText(evento) {
    const letra = evento.key
    if (letra !== 'a') {
        evento.preventDefault();
    }
}
INPUT_TEXT.addEventListener('keypress', getText);