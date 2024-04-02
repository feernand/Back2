//lendo arquivo usando fs
const fs=require('fs')

// fs.readFile('./dados.cvs',(erro,data)=>{
//     if(erro){
//         console.log(erro);
//     }else{
//      console.log(data.toString());
//     }
// })
//testar o método assíncrono

let dados='';
if(fs.existsSync('dados2.csv')){
    dados=fs.readFileSync('dados2.csv');
    console.log(dados.toString());
}else{
    console.log("Arquivo não encontrado");
}
console.log("Segunda operação")