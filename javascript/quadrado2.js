let n1 = Number(prompt("Digite o primeiro número para somar: "));
let n2 = Number(prompt("Digite o segundo número para somar: "));
let n3 = Number(prompt("Digite o terceiro número para somar: "));
let soma = Number(n1 + n2 + n3);
let q = Number(soma**2);
document.write(`${n1} + ${n2} + ${n3} = ${soma} e seu quadrado é ${q}`);