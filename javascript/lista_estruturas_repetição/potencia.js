let b = Number(prompt("Digite a base da potência:"));
let e = Number(prompt("Digite o expoente da potência:"));
let p = 1;
for (let i = 1; i<=e; i++){
    p = p * b;
}
document.write(`${b}<sup>${e}</sup> = ${p}`)
