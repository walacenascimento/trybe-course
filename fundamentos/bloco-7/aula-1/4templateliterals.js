// nos permite criar strings complexas de forma mais fácil.

const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

// com template literal
const myName = "Isabella"
console.log(`Welcome ${myName}!`);

//Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o operador + e \n para trocar de linha. Execute o código abaixo para ver o resultado!

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')
