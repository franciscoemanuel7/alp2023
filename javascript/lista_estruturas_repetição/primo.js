let n = Number(prompt("Digite um número:"));
let ePrimo = true;
if (n==2){
    document.write("O número é primo!");
}
else if (n>2){
    for (let i = 2; i<=n; i++){
        if (n%i==0){
            ePrimo = false;
            break;
        }
    }
    if(ePrimo){
        document.write("O número é primo!");
    }
    else {
        document.write("O número não é primo!");
    }
}
