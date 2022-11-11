function conta(){  
var Morango = parseFloat(document.getElementById("num1").value);
var Macas = parseFloat(document.getElementById("num2").value);

if (Morango < 6) {
    valorTotalMorango = Morango * 2.5;
} else {
    valorTotalMorango = Morango * 2.2;
}

if (Macas < 6) {
    valorTotalMacas = Macas * 1.8;
} else {
  valorTotalMacas = Macas * 1.5;  
}

 var TotalCompra = Morango + Macas;
 var valorTotalCompra = valorTotalMorango + valorTotalMacas;

if (TotalCompra > 25 || valorTotalCompra > 8) {
    valorTotalCompra *= 0.9;
    alert("O valor total da compra foi igual a: R$ " + valorTotalCompra.toFixed(2) + " reais.");
} else {
    alert("O valor total da compra foi igual a: R$ " + valorTotalCompra.toFixed(2) + " reais.");
}
}