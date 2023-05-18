let alt = Number(prompt("Digite sua altura (em m):"));
let pes = Number(prompt("Digite seu peso(em kg):"));
let imc = (pes/(Math.pow(alt,2))).toFixed(2);
if (imc<18.5){
    document.write(`Seu imc é de ${imc}! Você está abaixo do peso em relação à sua altura!`);
}
else if (imc>=18.5 && imc<=24.9){
    document.write(`Seu imc é de ${imc}! Seu peso está ideal em relação à sua altura!`);
}
else if (imc>=25 && imc<=29.9){
    document.write(`Seu imc é de ${imc}! Você está sobrepeso em relação à sua altura!`);
}
else if (imc>=30 && imc<=34.9){
    document.write(`Seu imc é de ${imc}! Você está com obesidade tipo I! Procure um médico!`);
}
else if (imc>=35 && imc<=39.9){
    document.write(`Seu imc é de ${imc}! Você está com obesidade tipo II! Procure um médico!`);
}
else {
    document.write(`Seu imc é de ${imc}! Você está com obesidade tipo III! Procure um médico!`);
}