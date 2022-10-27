const readline = require('readline-sync');

// const pesoKg = 55;
// const alturaCm = 160;

function handleIMC(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaMetros =  altura / 100;
  const alturaAoQuadrado = alturaMetros ** 2;

  const imc = peso / alturaAoQuadrado;
  return imc;
}

const IMC_MAX_E_MIN = {
  'Abaixo Do Peso': {
    minIMC: 0,
    maxIMC: 18.4,
  },
  'Normal': {
    minIMC: 18.5,
    maxIMC: 24.9,
  },
  'Acima Do Peso': {
    minIMC: 25,
    maxIMC:29.9,
  },
  'Obesidade Classe I': {
    minIMC: 30,
    maxIMC: 34.9,
  },
  'Obesidade Classe II': {
    minIMC: 35,
    maxIMC: 39.9,
  },
  'Obesidade Classe III': {
    minIMC: 40,
    maxIMC: 100,
  },
};

function handleIMCResult(imc) {
  const statuses = Object.keys(IMC_MAX_E_MIN);

  const resultFind = statuses.find((status) => {
    const { maxIMC, minIMC } = IMC_MAX_E_MIN[status];
    
    return imc >= minIMC && imc <= maxIMC;
  });
  return resultFind;
}

function main() {
  // const imc = handleIMC(pesoKg, alturaCm);


  // const peso = readline.questionInt(`Qual seu peso em KG? `);
  const peso = readline.questionFloat(`Qual seu peso em KG? `);
  const altura = readline.questionInt(`Qual sua altura em CM? `);

  const imc = handleIMC(peso, altura);
  const imcResult = handleIMCResult(imc)

   console.log(`IMC: ${imc.toFixed(2)}`);
   console.log(imcResult);
}

main();