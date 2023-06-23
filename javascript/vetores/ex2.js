let vetor = [];
let soma = 0;
for(let i=0; i<10; i++){
    vetor[i]=Number(prompt(`Digite o ${i+1}º número:`));
    soma += vetor[i];
}
document.write(`Vetor = [${vetor}]<br>`);
document.write(`A soma dos números do vetor é ${soma}`);