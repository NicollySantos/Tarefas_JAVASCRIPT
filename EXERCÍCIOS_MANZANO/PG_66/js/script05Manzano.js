alert("Prossiga para ver os valores ímpares situados entre 0 e 20");

for (var contador = 1; contador <= 20; contador++) {
    if (contador % 2 == 1) {
        document.write("<br/>"+contador + " é ímpar!");
    }
}
