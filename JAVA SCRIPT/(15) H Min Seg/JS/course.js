var tempo = Number (prompt("Digite o tempo em segundos"));

var horasSeg = 3600;
var horas = Math.round(tempo / horasSeg);
var minutos = Math.round((tempo - (horasSeg * horas)) / 60);
var segundos = Math.round(tempo - (horasSeg * horas) - (minutos * 60));

alert(horas + "h:" + minutos + "min:" + segundos + "s");