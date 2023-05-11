let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let m = (n1+n2)/2;
if (m>=7) {
    document.write(`A média do aluno foi de ${m.toFixed(2)}. O aluno foi aprovado!`);
}
else {
    document.write(`A média do aluno foi de ${m.toFixed(2)}. O aluno foi reprovado!`);    
}