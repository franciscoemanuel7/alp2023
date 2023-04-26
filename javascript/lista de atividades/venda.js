let c = Number(prompt("Digite o custo do produto:"));
let a = Number(prompt("Digite o valor do acréscimo em por cento:"));
let p = c+(c*(a/100));
document.write(`O custo do produto foi R$${c.toFixed(2)} e seu valor de venda com acréscimo de ${a}% é R$${p.toFixed(2)}`);