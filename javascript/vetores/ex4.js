let vetor = [];
for(let i = 0 ; i<10; i++){
    vetor[i]= Math.floor(Math.random(vetor)*100);
}
document.write(`Vetor = [${vetor}]<br>`);
for(let i = 0 ; i<vetor.length; i++){
   document.write(`O elemento ${vetor[i]} encontra-se na posição ${i} <br>`);
}