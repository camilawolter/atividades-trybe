function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criandoDiasDoMes() {
  const diasDoMes = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let dia = dezDaysList[index];
    let diaItem = document.createElement('li');

    if (dia === 24 | dia === 31) {
      diaItem.className = 'day holiday';
      diaItem.innerHTML = dia;
      diasDoMes.appendChild(diaItem);
    } else if (dia === 4 | dia === 11 | dia === 18) {
      diaItem.className = 'day friday';
      diaItem.innerHTML = dia;
      diasDoMes.appendChild(diaItem);
    } else if (dia === 25) {
      diaItem.className = 'day holiday friday';
      diaItem.innerHTML = dia;
      diasDoMes.appendChild(diaItem);
    } else {
      diaItem.innerHTML = dia;
      diaItem.className = 'day';
      diasDoMes.appendChild(diaItem)
    }
  }
}
criandoDiasDoMes ();

function criandoFeriadosButton (nomeButton) {
  let buttonContainer = document.querySelector('.buttons-container');
  let novoButton = document.createElement('button');
  let novoButtonID = 'btn-holiday'

  novoButton.innerHTML = nomeButton;
  novoButton.id = novoButtonID;
  buttonContainer.appendChild(novoButton);
}
criandoFeriadosButton ('Feriados');

function corFundoFeriados () {
  let feriadosButton = document.querySelector('#btn-holiday');
  let feriados = document.querySelectorAll('.holiday');
  let backgroud = 'rgb(238,238,238)';
  let novaCor = 'pink';

  feriadosButton.addEventListener('click', function () {
    for (let index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.backgroundColor === novaCor) {
        feriados[index].style.backgroundColor = backgroud;
      } else {
        feriados[index].style.backgroundColor = novaCor;
      }
    }
  })
}
corFundoFeriados ();

function criandoSextaButton (nomeButton) {
  let buttonContainerSexta = document.querySelector('.buttons-container');
  let novoButtonSexta = document.createElement('button');
  let novoButtonIDSexta = 'btn-friday';

  novoButtonSexta.innerHTML = nomeButton;
  novoButtonSexta.id = novoButtonIDSexta;
  buttonContainerSexta.appendChild(novoButtonSexta)
}
criandoSextaButton ('Sexta-feira');

function textoSexta () {
  let sextaButton = document.querySelector('#btn-friday');
  let sextas = document.querySelectorAll('.friday');
  let texto = 'SEXTOU'
  let diasSexta = [4, 11, 18, 25];

  sextaButton.addEventListener('click', function () {
    for (let index = 0; index < sextas.length; index += 1) {
      if (sextas[index].innerHTML !== texto) {
        sextas[index].innerHTML = texto
      } else {
        sextas[index].innerHTML = diasSexta[index];
      }
    }
  })
}
textoSexta();

function diaMouseOver () {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function (evento) {
    evento.target.style.fontSize = '40px';
  })
}
diaMouseOver();

function diaMouseOut () {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function (evento) {
    evento.target.style.fontSize = '20px';
  })
}
diaMouseOut();