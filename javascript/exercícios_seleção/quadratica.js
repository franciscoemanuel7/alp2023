let a = Number(prompt("Digite o coeficiente 1:"));
let b = Number(prompt("Digite o coeficiente 2:"));
let c = Number(prompt("Digite o coeficiente 3:"));
let delta = (Math.pow(b,2)-4*a*c);
if(a!=0){
    if(delta>0){
        let raiz1=(-b+Math.sqrt(delta))/2*a;
        let raiz2=(-b-Math.sqrt(delta))/2*a;
        document.write(`As raízes da equação são x1=${raiz1}; x2=${raiz2}!`);
    }
    else if (delta==0){
        let raiz=(-b/2*a);
        document.write(`As raízes da equação são x1 e x2=${raiz}!`);        
    }
    else{
        document.write(`Não há raizes reais para essa equação!`)
    }
}
else {
    document.write(`Esta equação não é do 2º grau, pois o coeficiente A é igual a zero!`)
}