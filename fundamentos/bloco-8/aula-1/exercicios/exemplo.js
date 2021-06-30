// const repeat = (number, action) => {
//   for (let i = 0; i <= number; i += 1) {
//     action(i);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'este número é par!');
//   }
// });

// function sum (num1, num2) {
// return num1 + num2;
// }
// console.log(sum(10,5));
// //-----------------------------------

// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// console.log(sum(10,5));
// console.log(sub(10,5));
// console.log(mult(10,5));
// console.log(div(10,5));
//-----------------------------------

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculadora = (func) => func(10, 5);

//const calculadora = () => (10, 5);
console.log(calculadora(sum));
console.log(calculadora(sub));
console.log(calculadora(mult));
console.log(calculadora(div));
