alert(`Digite quantas temperaturas desejar! Para encerrar a leitura digite "0"!`);
let maxTem = null;
let minTem = null;
let sTem = 0;
let qTem = 0;
for(;;){
    tem = Number(prompt(`Digite uma temperatura ou "0" para encerrar:`));
    if (tem!=0){
        sTem += tem;
        qTem++;
        document.write(tem + "<br/>");
        if (tem>maxTem){
            maxTem = tem;
        }
        if (tem<minTem){
            minTem = tem;
        }
    }
    else {
        break;
    }
}
document.write(`Maior temperatura apresentada: ${maxTem}°<br/>`);
document.write(`Menor temperatura apresentada: ${minTem}°<br/>`);
document.write(`A média das temperaturas apresentadas é: ${sTem/qTem}`);