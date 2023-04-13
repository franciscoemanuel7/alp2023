v = Number(prompt("Digite um valor em reais: "))

c100 = v/100
c100 = Math.trunc(c100)
v = v%100

c50 = v/50
c50 = Math.trunc(c50)
v = v%50

c20 = v/20
c20 = Math.trunc(c20)
v = v%20

c10 = v/10
c10 = Math.trunc(c10)
v = v%10

c5 = v/5
c5 = Math.trunc(c5)
v = v%5

c2 = v/2
c2 = Math.trunc(c2)
v = v%2

document.write(`Serão necessárias: </br> ${c100} notas de 100 reais </br> ${c50} notas de 50 reais </br> ${c20} notas de 20 reais </br> ${c10} notas de 10 reais </br> ${c5} notas de 5 reais </br> ${c2} notas de 2 reais.`)