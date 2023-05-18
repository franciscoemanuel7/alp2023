let ano = Number(prompt("Digite um ano:"));
if ((ano % 4 == 0 && ano % 100 != 0) || ano%100==0){
    document.write(`O ano ${ano} é bissexto!`);
}
else {
    document.write(`O ano ${ano} não é bissexto!`);
}