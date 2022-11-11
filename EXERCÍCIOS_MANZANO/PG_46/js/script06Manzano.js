var base = parseInt(prompt("Potência - Digite o valor da base:"));
var expoente = parseInt(prompt("Potência - Digite o valor da expoente:"));
var contador = 1;
var potencia = 1;

while (contador <= expoente) {
    potencia *= base;
    contador++;
}

document.write(base + " ** " + expoente + " = " + potencia);