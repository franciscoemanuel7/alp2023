let xc = Number(prompt("Digite a coordenada x do centro da circunferência:"));
let yc = Number(prompt("Digite a coordenada y do centro da circunferência:"));
let r = Number(prompt("Digite o raio da circunferência:"));
let x = Number(prompt("Digite a coordenada x do ponto a ser localizado:"));
let y = Number(prompt("Digite a coordenada y do ponto a ser localizado:"));
let d1 = Math.pow((x-xc),2);
let d2 = Math.pow((y-yc),2);
let d3 = d1 + d2;
let d4 = Math.sqrt(d3);
if(d4>r){
    document.write(`O ponto (${x},${y}) não faz parte do círculo!`);
}
else {
    document.write(`O ponto (${x},${y}) faz parte do círculo!`);
}