let v = Number(prompt("Digite o valor do produto:"));
let p = Number(v/5);
document.write(`O produto de valor R$${v.toFixed(2)} será pago em 5 prestações sem juros de R$${p.toFixed(2)}`);