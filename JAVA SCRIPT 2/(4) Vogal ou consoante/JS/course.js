var letra = prompt("Digite uma letra");

letra = letra.toLowerCase();

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
	alert("A letra '" + letra + "' � uma vogal");
} else {
	alert("A letra '" + letra + "' � uma consoante");
}