let atleta = [];
let soma = 0;
for(let i = 0; i < 10; i++){
    atleta[i]= Number(prompt(`Digite a ${i+1}° altura`));
    soma+= atleta[i];
}
let media = soma/atleta.length;

document.write(`A média das alturas é ${media.toFixed(2)}<br>`);

for(let i = 0; i < atleta.length; i++){
    if(atleta[i] > media){
        document.write(`O atleta ${i} tem uma altura de ${atleta[i]}<br>`);
    }
}