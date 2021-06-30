// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// função que veio no exercicio
function flatten () { 
  return arrays.reduce((acumulador, valor) => acumulador.concat(valor), []);
 // escreva seu código aqui
}
console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Função criada por mim.
// const matriz = () => {
//   return arrays.reduce((acumulador, valor) => acumulador.concat(valor), []);
// }
// console.log(matriz());

// assert.deepStrictEqual(matriz(), ['1', '2', '3', true, 4, 5, 6]);