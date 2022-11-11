function conta(){
  var A = parseInt(document.getElementById("num1").value);
  var B = parseInt(document.getElementById("num2").value);
  var C = parseInt(document.getElementById("num3").value);
  var D = parseInt(document.getElementById("num4").value);

  if (A > B + C || B > A + C || C > A + B) {
    alert("Não formam um triângulo! | Tipo: ");
} else if (A == B && B == C) {
    alert("Formam um Triângulo | Tipo: Equilátero");
} else if (A != B && B != C && A != C) {
    alert("Formam um triângulo | Tipo: Escaleno");
} else {
    alert("Formam um triângulo | Tipo: Isósceles");
}
}