var base = 3;
var expoente = 0;
var potencia = 1;
var contador = 1;

while (expoente <= 15) {
    while (contador <= expoente) {
        potencia *= base;
        contador++;
    }
    document.write("<br/>" + base + " ** " + expoente + " = " + potencia);
    expoente++;
}