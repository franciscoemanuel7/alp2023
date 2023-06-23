let orig=[];
let imp=[];
let par=[];
for(let i = 0; i<10; i++){
    orig[i]= Number(prompt(`Digite o ${i+1}º número`));
}
for(let i=0; i<10 ; i++){
    if(orig[i] % 2 == 0){
        par.push(orig[i]);
    }
    else{
        imp.push(orig[i]);
    }
}
document.write(`Original= [${orig}]<br>`);
document.write(`Pares= [${par}]<br>`);
document.write(`Impares= [${imp}]<br>`);