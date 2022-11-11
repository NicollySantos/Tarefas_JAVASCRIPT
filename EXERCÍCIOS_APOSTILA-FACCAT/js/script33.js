function conta(){
  var A = parseInt(document.getElementById("num1").value);
  var B = parseInt(document.getElementById("num2").value);

  if (A == B) {
    alert("Os valores digitados são iguais: " + A + " = " + B);
} else if (A > B) {
    alert("O primeiro valor digitado é o maior: " + A + " > " + B);
} else {
    alert("O segundo valor digitado é o maior: " + B + " > " + A);
}
}