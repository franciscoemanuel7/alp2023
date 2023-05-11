let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));
let m = (n1+n2+n3)/3;
if (m>=7) {
    document.write(`A média do aluno foi de ${m.toFixed(2)}. O aluno foi aprovado!`);
}
else if (m<7 && m>=5) {
    alert(`A média do aluno foi de ${m.toFixed(2)}. O aluno irá fazer a recuperação!`);
    let rec = Number(prompt("Digite sua nota de recuperação:"));
    if(rec>=5){
        document.write(`Parabéns, você tirou ${rec.toFixed(2)} na prova final e foi aprovado!`);
    }
    else {
        document.write(`Infelizmente, sua nota foi ${rec.toFixed(2)}. Você foi reprovado!`)
    }
}
else {
    document.write(`A média do aluno foi de ${m.toFixed(2)}. O aluno foi reprovado!`);    
}
