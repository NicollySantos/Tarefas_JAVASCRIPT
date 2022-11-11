
var valor;
var valoresLidos = 0;
var somatorio = 0;
var media = 0.0;

do {
    valor = parseInt(prompt("Digite um valor numérico inteiro [- interrompe]:"));
    somatorio += valor;
    valoresLidos++;
} while (valor >= 0);

media = somatorio / valoresLidos;
alert(valoresLidos + " valores lidos | Somatório = " + somatorio + " | Média = " + media);