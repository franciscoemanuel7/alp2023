let n = Number(prompt("Digite um número:"));
if (n<=0){
    document.write(`(${n})² = ${Math.pow(n, 2)}`);
}
else {
    document.write(`√${n} ≅ ${Math.sqrt(n).toFixed(3)}`);
}