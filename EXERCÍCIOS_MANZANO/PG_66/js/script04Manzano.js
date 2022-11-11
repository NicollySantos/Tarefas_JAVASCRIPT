var somador = 0;

for (var contador = 1; contador < 501; contador++) {
    if (contador % 2 == 0) {
        somador += contador;
    }
}
document.write("O somatório dos valores pares entre 1 e 500 é igual a: " + somador);