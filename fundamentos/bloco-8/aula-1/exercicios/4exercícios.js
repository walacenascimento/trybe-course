// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (cadastroFuncionario) => {
  const employees = {
    id1: cadastroFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: cadastroFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: cadastroFuncionario('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const cadastroFuncionario = (novoFuncionario) => {
  const email = novoFuncionario;
  return `${novoFuncionario}, email:${email}@betrybe.com`;
}

console.log(newEmployees(cadastroFuncionario));

// -----------------------------------------------------------------------

// const dadosDaPessoa = {
//   nomeCompleto: `Walace`,
//   email:`walace@trybe.com`,
// }

// // console.log(dadosDaPessoa);

// console.log(dadosDaPessoa.nomeCompleto, dadosDaPessoa.email);
