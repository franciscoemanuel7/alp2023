let v1 = Number(prompt("Digite o valor do primeiro produto:"));
let q1 = Number(prompt("Digite a quantidade do primeiro produto:"));
let v2 = Number(prompt("Digite o valor do segundo produto:"));
let q2 = Number(prompt("Digite a quantidade do segundo produto:"));
let ipi = Number(prompt("Digite o ipi:"));
let p = Number((v1*q1+v2*q2)*(ipi/100+1));
document.write(`O valor fial será de R$${p.toFixed(2)}`);