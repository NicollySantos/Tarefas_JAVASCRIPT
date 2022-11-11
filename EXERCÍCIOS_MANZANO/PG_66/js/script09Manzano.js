var anterior = 1;
var atual = 1;
var proximo;

alert("Prossiga para ver a série de Fibonacci até o 15º termo:");
alert("1º : " + anterior);
alert("2º : " + atual);

for (var contador = 3; contador <= 15; contador++) {
    proximo = anterior + atual;
    document.write("<br/>"+contador + "º : " + anterior + " + " + atual + " = " + proximo+"<br/>");
    anterior = atual;
    atual = proximo;
}