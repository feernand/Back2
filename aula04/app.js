const fs=require('fs');

fs.appendFile('logs.log',"helma maria \n",(erro)=>{
    console.log(erro)
})
//apagar arquivo
if(fs.existsSync('logs.log')){
    fs.rmSync('logs.log')
}
console.log("fim da execução");