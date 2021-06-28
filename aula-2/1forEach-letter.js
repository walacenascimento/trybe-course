// forEach 

const letters = ['a','b','c','d','e','f','g','h','i','j']

// for(let index = 0; index < letters.length; index += 1){
//   console.log(letters[index]);
// }

letters.forEach((letter) => {
  console.log(letter);
});

// A mesma função de cima.
letters.forEach((letter) => console.log(letter));

//---------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((number) => {
  console.log(number);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(number => console.log(number));
