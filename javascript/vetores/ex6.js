let vetor = [];
let qPar = 0;
let qImpar = 0;
for (let i = 0; i<10; i++){
    vetor[i] = Number(prompt(`Digite o ${i+1} número:`));
    if (vetor[i] % 2 == 0){
        qPar++;
    }
    else{
        qImpar++;    
    }
}
document.write(`Vetor = [${vetor}]<br>`);
document.write(`A quantidade de números pares é ${qPar}<br>`);
document.write(`A quantidade de numeros ímpares é ${qImpar} `);