var numero;
var contador = 1;
var somatorio = 0;
var fatorial = 1;

do {
    numero = parseInt(prompt("Digite o " + contador + "º valor:"));
    do {
        fatorial = fatorial * numero;
        numero--;
    } while (numero > 1);
    
    somatorio = somatorio + fatorial;
    contador++;
    fatorial = 1;
} while (contador <= 15);
alert("O somatório do fatorial dos 15 valores é igual a: " + somatorio);