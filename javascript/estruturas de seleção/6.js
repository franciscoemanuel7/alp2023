n1 = Number(prompt("Digite um número:"));
n2 = Number(prompt("Digite um segundo número:"));
n3 = Number(prompt("Digite um número:"));
if (n1>n2 && n1>n3){
    document.write(`${n1} é o maior número dentre os apresentados!`);
}
else if (n2>n1 && n2>n3){
    document.write(`${n2} é o maior número dentre os apresentados!`);
}
else if (n3>n2 && n3>n1){
    document.write(`${n3} é o maior número dentre os apresentados!`);
}
else if (n1==n2 && n1==n3){
    document.write(`Os números digitados são iguais!`);
}