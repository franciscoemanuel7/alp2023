let dolar = Number(prompt("Digite a cotação do dólar hoje: "));
let real = Number(prompt("Digite quantos reais você tem: "));
let val = Number(real/dolar);
val = val.toFixed(2);
document.write(`Hoje, ${real} reais equivalem à ${val} dólares`);