let vetor =[];
for(let i = 0; i<10; i++){
    vetor[i]=Number(prompt(`Digite o ${i+1}º número:`));
}
document.write(`Vetor = [${vetor}]<br>`);

let men_pos = 0;

for(let i = 0; i<10; i++){
    if(vetor[i] < vetor[men_pos]){
        men_pos = i;
    }
}
document.write(`O menor elemento do vetor é ${vetor[men_pos]} e sua posição é ${men_pos}`);