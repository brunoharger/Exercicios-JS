var a = Number( prompt("Lado A"));
var b = Number( prompt("Lado B"));
var c = Number( prompt("Lado C"));

if (a + b >= c && a + c >= b && b + c >= a){
        if (a == b && b == c && c == a){
            alert ("Triangulo Equilatero");
            }else
			if (a == b || b == c || c == a){
            alert ("Triangulo Isosceles");
            }else
		    if (a != b && b != c && c != a){
            alert ("Triangulo Escaleno");
            }
}