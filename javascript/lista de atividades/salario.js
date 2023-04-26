let sal = Number(prompt("digite o valor do seu salário:"));
let salmin = Number(prompt("Digite o valor do salário mínimo:"));
let q = Number(sal/salmin);
document.write(`Seu salário é ${sal.toFixed(2)} e você recebe ${q.toFixed(2)} salários mínimos!`)