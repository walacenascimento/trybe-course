// First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript) trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição, retorno, parâmetro)

// Atribuir funcões à variaveis
// const sum = (a, b) => a + b;

// console.log(sum(4,5));

// Passar funções como argumento para outras funções:

const sayHello = () => {
  console.log('hello trybers');
}

setTimeout(sayHello, 1000);
