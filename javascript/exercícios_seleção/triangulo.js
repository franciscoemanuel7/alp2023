let l1 = Number(prompt("Digite o primeiro lado do triângulo:"));
let l2 = Number(prompt("Digite o segundo lado do triângulo:"));
let l3 = Number(prompt("Digite o terceiro lado do triângulo:"));
if (l1+l2>l3 && l1+l3>l2 && l2+l3>l1){
    if(l1==l2 && l2==l3){
        document.write(`O triângulo é equilátero!`)
    }
    else if (l1==l2 || l1==l3 || l2==l3){
        document.write(`O triângulo é isóceles!`);
    }
    else {
        document.write(`O triângulo é escaleno!`);
    }
}
else {
    document.write(`Os lados informados não correspondem aos lados de um triângulo!`);
}