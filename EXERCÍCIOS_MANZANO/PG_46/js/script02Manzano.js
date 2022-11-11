var acumulador = 0;
var contador = 1;

while (contador < 101) {

    acumulador += contador;
    contador++;
}
document.write("A soma dos cem primeiros números inteiros é igual a: " + acumulador);
