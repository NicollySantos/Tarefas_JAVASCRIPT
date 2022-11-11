var valor = parseInt(prompt("Digite um valor numérico inteiro:"));
var menor = valor;
var maior = valor;

do {
    valor = parseInt(prompt("Digite outro valor numérico inteiro: [- interrompe]"));
    if (valor > maior) {
        maior = valor;
    }
    if (valor < menor) {
        menor = valor;
    }
} while (valor >= 0);
alert("O maior e o menor valor digitado respectivamente foi: " + maior + " e " + menor);