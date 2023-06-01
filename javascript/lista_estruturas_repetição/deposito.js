let c = Number(prompt("Digite o valor do depósito (em R$):"));
let i = Number(prompt("Digite a taxa de juros da poupança (ao mês):"));
let s = c;
let j = 0;
for (t=1; t<=24; t++){
    j = s * (i/100);
    s = s + j;
    document.write(`Saldo no ${t}º mês: R$ ${s.toFixed(2)} <br/>`);
}
let l = s-c;
document.write(`Lucro obtido com juros: R$ ${l.toFixed(2)}`);