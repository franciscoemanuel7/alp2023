let v = Number(prompt("Digite o valor do boleto: "));
let j = Number(prompt("Digite o valor dos juros: "));
let d = Number(prompt("Digite quantos dias está atrasado: "));
let p = Number(v+(v*(j/100))*d);
p = p.toFixed(2);
document.write(`O valor da prestação é R$${p}`);