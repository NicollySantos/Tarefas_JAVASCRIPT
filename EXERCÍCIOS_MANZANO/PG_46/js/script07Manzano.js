var anterior = 1;
var atual = 1;
var contador = 3;
var proximo;

alert("Prossiga para ver a série de Fibonacci até o 15º termo:");
alert("1º = " + anterior);
alert("2º = " + atual);

while (contador <= 15) {
    proximo = anterior + atual;
    document.write("<br/><br/>"  +contador + "º: " + anterior + " + " + atual + " = " + proximo);
    contador++;
    anterior = atual;
    atual = proximo;
}