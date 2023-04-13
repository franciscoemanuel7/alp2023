let v = Number(prompt("Digite o valor do produto: "));
v = v.toFixed(2);
let d = Number(v - v*(30/100));
d = d.toFixed(2);
document.write(`O produto de valor R$${v} com desconto de 30% fica R$${d}`);