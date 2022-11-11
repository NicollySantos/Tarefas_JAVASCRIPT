var contador;
alert("Conversão de graus Celsius para Fahrenheit de 10 em 10 graus:");

for (contador = 10; contador <= 100; contador+=10){
    var fahrenheit = (9 * contador + 160) / 5;
    document.write("<br/>"+contador + "ºC = " + fahrenheit + "ºF" + "<br/>");
}