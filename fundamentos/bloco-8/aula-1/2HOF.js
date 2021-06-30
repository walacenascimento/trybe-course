/* Construímos uma função que simula o registro de uma nova pessoa e passamos como argumento de uma segunda função. Logo, addEventListener é uma HOF.
  const button = document.querySelector('#signup-button');
  button.addEventListener('click', registerUser);  */

// Funções de saudação HOF
const saudacaoFormal = (colega) => {
  return `Olá ${colega}, tudo bem com você? Espero que sim!`;
}

const saudacaoDeMauHumor = (colega) =>{
  return 'Oi';
}

const saudacaoDeBomHumor = (colega) => {
  return 'Olá minha querida';
}

const pessoa = {
  nome:'Walace',
  codNome:'Nascimento',
  
  saudacao: function(colega, callback) {
    console.log(callback(colega));
  }

}

pessoa.saudacao('Walace', saudacaoFormal);
pessoa.saudacao('Walace', saudacaoDeMauHumor);
pessoa.saudacao('Walace', saudacaoDeBomHumor);
