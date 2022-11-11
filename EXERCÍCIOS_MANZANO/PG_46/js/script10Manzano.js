var contador = 50;
var soma = 0;
var pares = 0;
var media = 0.0;

alert("Veja a soma e a média aritmética dos valores pares situados entre 50 e 70:")
while (contador <= 70) {
    if (contador % 2 == 0) {
        soma = soma + contador;
        pares++;
    }
    contador++;
}
media = soma / pares;

document.write("Soma dos valores = " + soma + " | Média dos valores = " + media);