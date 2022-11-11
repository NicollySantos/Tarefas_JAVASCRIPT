var contador = 1;
var somaPares = 0;

 while (contador < 501) {
     if (contador % 2 == 0) {
        somaPares += contador;
     }
     contador++;
 }
 document.write("A soma dos pares entre 1 e 500 é igual a: " + somaPares);