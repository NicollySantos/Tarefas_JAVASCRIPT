var valor = parseInt(prompt("Digite o número de qual tabuada deseja ver:"));

for (var contador = 1; contador <= 10; contador++) {
    document.write("<br/>" + valor + " x " + contador + " = " + valor * contador+"<br/>");
}