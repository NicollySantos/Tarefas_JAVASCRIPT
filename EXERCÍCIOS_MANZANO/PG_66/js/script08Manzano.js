var base = parseInt(prompt("Digite o valor da base:"));
var expoente = parseInt(prompt("Digite o valor do expoente:"));
var potencia = 1;

for (var contador = 1; contador <= expoente; contador++) {
    potencia *= base;
}

document.write(base + " ** " + expoente + " = " + potencia);