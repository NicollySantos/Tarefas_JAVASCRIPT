var contador = 1;
var somador = 0;

do {
    if (contador % 2 == 0) {
        somador = somador + contador;
        
    }
    contador++;
} while (contador <= 500);

alert("A soma dos valores pares entre 1 e 500 é igual a: " + somador);