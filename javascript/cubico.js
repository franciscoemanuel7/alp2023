let r = Number(prompt("Digite o raio da lata (cm): "));
let alt = Number(prompt("Digite a altura da lata (cm): "));
let v = Number((3.14)*(r**2)*alt);
v = v.toFixed(2);
document.write(`O volume da lata de tinta de altura ${alt}cm e raio ${r}cm é ${v}m³`);