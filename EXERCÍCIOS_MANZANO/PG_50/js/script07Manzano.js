var numero = 1;
var contador = 1;
var fatorial;

do {
    if (contador % 2 == 1) {
        fatorial = 1;
        numero = contador;
        do {
            fatorial *= numero
            numero--;
        } while (numero > 1);
        alert("O fatorial de " + contador + " é igual a: " + fatorial);
    }
    contador++;
} while (contador <= 10);