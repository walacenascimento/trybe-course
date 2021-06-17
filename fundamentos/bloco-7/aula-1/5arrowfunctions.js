//  Função convencional
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Função arrowFunction 
const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());
//------------------------------------------------------------------
// Função arrowFunction refatorada 
const printName = () => "Lucas";
console.log(printName());

//-------------------------------------------------------------------
// Quando a função tiver somente um parametros, podemos omitir os parêntese.
const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(10));

const multiplyByTwo = number => number * 2; // parênteses omitdos 
console.log(multiplyByTwo(10));

// Função arrowFunctins com 2 parametros 
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
