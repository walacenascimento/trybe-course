// 1-0 Testa se sum é uma função.
// 1-1 Teste se o retorno de sum(4, 5) é 9
// 1-2 Teste se o retorno de sum(0, 0) é 0
// 1-3 Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// 1-4 Teste se a mensagem de erro é "parameters must be numbers" quando realizar chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(typeof sum, 'function', 'O tipo de sum não é uma função');
assert.strictEqual(sum(4,5),9, 'A soma de 4 + 5 = 9');
assert.strictEqual(sum(0,0),0, 'A soma de 0 + 0 = 0');
// assert.strictEqual(sum(4,'5'), 9, '5 é uma string');
assert.throws(()=> {
  sum(4,'5',);
});

assert.throws(()=> {
  sum(4,'5',);
},/^Error: parameters must be numbers$/);
