var contador = 10;
var fahrenheit;

alert("Conversão de graus Celsius para Fahrenheit de 10 em 10 graus:");
while (contador <= 100) {
    fahrenheit = (9 * contador + 160) / 5;
    document.write("<br/>"+ contador + "ºC = " + fahrenheit + "ºF");
    contador += 10;
}