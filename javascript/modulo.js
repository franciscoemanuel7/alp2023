let n = prompt ("Digite um número para mostrar o módulo: ");
n = Number (n);
if (n<0) {
    let q = n*-1
    document.write(`O módulo de |${n}| é ${q}`);
}
else if (n>0){
    let q = n
    document.write(`O módulo de |${n}| é ${q}`);
}