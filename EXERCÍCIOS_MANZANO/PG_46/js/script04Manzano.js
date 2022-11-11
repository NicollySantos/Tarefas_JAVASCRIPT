var contador = 0;
var somaImpares = 0;

while (contador < 21) {
    if (contador % 2 == 1) {
        somaImpares++;
        alert(contador + " é ímpar!");
    }
    contador++;
}
document.write("Entre 0 e 20 existem " + somaImpares + " valores ímpares.");