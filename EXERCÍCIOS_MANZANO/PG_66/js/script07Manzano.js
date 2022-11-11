var base = 3;
var potencia;

for (var expoente = 0; expoente < 16; expoente++) {
    if (expoente == 0) {
        alert(base + " elevado a " +  expoente + " = 1");
    }
    if (expoente != 0) {
        potencia = 1;
        for (var contador = 1; contador <= expoente; contador++) {
            potencia *= base;
        }
       
        document.write("<br/>"+ base + " elevado a " + expoente + " = " + potencia);
    }
}