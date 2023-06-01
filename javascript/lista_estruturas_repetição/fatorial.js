let num = Number(prompt("Digite o numero para descobrir seu fatorial:"));
let fat = 1;

for (let i = num; i > 0; i--) {
    fat *= i;
}
document.write(`!${num} = ${fat}.`)
