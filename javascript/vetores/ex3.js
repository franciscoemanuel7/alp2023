let vetor = [];
for(let i = 0; i<8; i++){
    vetor[i]= Number(prompt(`Digite o ${i+1}º número`));
}
document.write(`Vetor = [${vetor}]<br>`);
let n =  Number(prompt(`Digite o número que deseja encontrar no vetor:`));
let pos = -1;
for(let i = 0; i<vetor.length; i++){
    if(n==vetor[i]){
        pos = i;
        document.write(`${n} encotrado na posição ${pos}<br>`);
    }
} 
if (pos==-1){
    document.write(`${n} não encotrado `);
}