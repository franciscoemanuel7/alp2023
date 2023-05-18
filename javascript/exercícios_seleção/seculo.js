let ano = Number(prompt("Digite um ano:"));
if(ano % 100 == 0){
    document.write(`O ano ${ano} está no século ${ano/100}!`);
}
else{
    document.write(`O ano ${ano} está no século ${Math.ceil(ano/100)}!`);
}