function conta(){
  var litrosVendidos = parseFloat(document.getElementById("num1").value);
  var tipoCombustivel = document.getElementById("num2").value;

  var precoAlcool = 2.90;
  var precoGasolina = 3.30;
  var valorPago = 0.0;

  switch (tipoCombustivel) {
    case "A":
        if (litrosVendidos <= 20) {
            valorPago = litrosVendidos * (precoAlcool * 0.97);
            alert("O valor pago pelo cliente será de: R$ " + valorPago.toFixed(2) + " reais.");
        } else {
            valorPago = litrosVendidos * (precoAlcool * 0.95);
            alert("O valor pago pelo cliente será de: R$ " + valorPago.toFixed(2) + " reais.");
        }
    break;
    
    case "G":
        if (litrosVendidos <= 20) {
            valorPago = litrosVendidos * (precoGasolina * 0.96);
            alert("O valor pago pelo cliente será de: R$ " + valorPago.toFixed(2) + " reais.");
        } else {
            valorPago = litrosVendidos * (precoGasolina * 0.94);
            alert("O valor pago pelo cliente será de: R$ " + valorPago.toFixed(2) + " reais.");
        }
    break;

    default:
        alert("Opção inválida! Digite somente 'A' ou 'G' para escolher o tipo de combustível.");
    break;
}
}