var a = Number( prompt("Digite um n�mero para A"));
var b = Number( prompt("Digite um n�mero para B"));
var c = Number( prompt("Digite um n�mero para C"));
var delta = eval((b*b)-(4*a*c));
if( delta < 0){ 
alert("N�o � possivel realizar a equa��o");
} else {
	var x1 = eval((-1)*b + (Math.sqrt(delta)))/(2*a);
	var x2	= eval((-1)*b - (Math.sqrt(delta)))/(2*a);
	alert("x1 = "+x1);
	alert("x2 = "+x2);
}