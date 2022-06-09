let clickCount = 0;
let textToDisplay = document.getElementById("numero");
let button = document.getElementById("button");


button.addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);