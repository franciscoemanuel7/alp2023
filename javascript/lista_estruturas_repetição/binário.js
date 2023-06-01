n = Number(prompt("Digite um número para conversão em binário:"));
d = n;
b = "";
while (d > 0) {
    b = (d % 2) + b;
    d = Math.floor(d / 2);
  }
document.write(`Decimal: ${n} → Binário: ${b}`)