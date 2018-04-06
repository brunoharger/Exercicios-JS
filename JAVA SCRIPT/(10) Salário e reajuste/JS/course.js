var numero = Number( prompt("Salário mensal"));
var reajuste = Number( prompt("Pecentual de reajuste"));
var conta = reajuste/100;
var conta2 = numero * conta;
var conta3 = numero + conta2;
alert ("O salário é" + conta3)