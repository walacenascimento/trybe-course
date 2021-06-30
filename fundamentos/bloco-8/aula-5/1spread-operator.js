// O spread é usado para combinar objetos e arrays copiando os seu valores em um novo objeto ou array. Para passar o objeto ou array que será copiado usamos os três pontos(...) antes do objeto ou array a ser copiado. Como mostra no exemplo.

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
//console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
//console.log(numbers); // [ 1, 2, 3 ]

//-----------------------------------------------

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring, ...newArray];
console.log(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

// função que mede o IMC de um paciente

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const paciente = [75, 1.75];

console.log(imc(...paciente));

// 

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5