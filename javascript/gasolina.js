let lit = Number(prompt("Digite o valor do litro de gasolina: "));
let val = Number(prompt("Digite o valor que você deseja abastecer: "));
let q = Number(val/lit);
q = q.toFixed(2);
document.write(`Abastecendo ${val} reais, o total de litros será ${q} litros`);