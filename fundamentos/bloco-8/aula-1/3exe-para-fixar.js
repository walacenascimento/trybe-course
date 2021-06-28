// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// // Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
function acordar() { //  Função tradicional 
  return `Acordando!!`;
}
console.log(acordar());
// -------------------------------------------

const acordar = () => { // Aroow Function
  return `Acordando!!`;
}
const bora = () => {
  return `Bora tomar café!!`;
}
const partiu = () => {
  return `Partiu dormir!!`;
}

const doingThings = (callback) => { //  Função de ordem superior
  console.log(callback());
}

doingThings(acordar);
doingThings(bora);
doingThings(partiu);

// O mesmo bloco de código refatorado
// const acordar = () => `Acordando!!`
// const bora = () => `Bora tomar café!!`
// const partiu = () => `Partiu dormir!!`

// const doingThings = (callback) => {console.log(callback());}

// doingThings(acordar);
// doingThings(bora);
// doingThings(partiu);
