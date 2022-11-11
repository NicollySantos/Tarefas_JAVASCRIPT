var contador = 1;
var valor;
var soma = 0.0;
var media = 0.0;

while (contador <= 10) {
    valor = parseFloat(prompt("Digite o " + contador + "º valor:"));
    soma = soma + valor;
    media = soma / contador;
    contador++;
}

document.write("Soma dos valores = " + soma + " | Média dos valores = " + media);