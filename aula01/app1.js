console.log('frutas');

let pessoas =require('./dados');
// console.log(pessoas);
// console.log(pessoas[2]);

// console.log(dados.nomes);
// console.log(dados.frutas);

//usando destruturada
let {nomes, frutas, soma}=require('./dados');
console.log(nomes);
console.log(frutas);
console.log(soma(55,32))