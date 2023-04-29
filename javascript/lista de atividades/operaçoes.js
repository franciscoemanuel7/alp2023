let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let som = Number(n1+n2);
let sub = Number(n1-n2);
let mul = Number(n1*n2);
let div = Number(n1/n2);
document.write(`Números: ${n1}, ${n2}<br/>A soma é ${som}<br/>A diferença é ${sub}<br/>O produto é ${mul}<br/>A divisão é ${div.toFixed(2)}<br/>`)
