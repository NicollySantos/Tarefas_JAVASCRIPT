function conta(){
  var A = parseInt(document.getElementById("num1").value);
  var B = parseInt(document.getElementById("num2").value);
  var C = parseInt(document.getElementById("num3").value);
  if (A == B || B == C || C == A) {
    alert("Digite apenas valores diferentes!");
} else if (A > B && A > C) {
    var maior = A;
    if (B < C) {
        var meio = C;
        var menor = B;
    } else {
        var meio = B;
        var menor = C;
    }
    alert("Ordem crescente: " + menor + ", " + meio + ", " + maior);
} else if (B > A && B > C) {
    maior = B;
    if (A < C) {
        meio = C;
        menor = A;
    } else {
        meio = A;
        menor = C;
    }
    alert("Ordem crescente: " + menor + ", " + meio + ", " + maior);
} else if (C > A && C > B) {
    maior = C;
    if (B < A) {
        meio = A;
        menor = B;
    } else {
        meio = B;
        menor = A;
    }
    alert("Ordem crescente: " + menor + ", " + meio + ", " + maior);
}
}
