//criar e remover pastas
const fs=require('fs');

//com método síncrona
// fs.mkdirSync('logs');

//com método assíncrono
// fs.mkdir('logs3',(erro)=>{
//     if(erro){
//         console.log(erro);
//     }
// })

//para remover pasta
//testar a existência
if(fs.existsSync('logs3')){
    fs.rmdirSync('logs3')
}
console.log("fim")