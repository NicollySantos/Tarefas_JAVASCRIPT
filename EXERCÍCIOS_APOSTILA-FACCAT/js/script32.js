function conta(){
  var A = document.getElementById("num1").value;
  var B = document.getElementById("num2").value;
  var C = parseInt(document.getElementById("num3").value);
  var D = parseInt(document.getElementById("num4").value);

  if (C == D) {
    alert("Empate: " + C + " x " + D);
} else if (C > D) {
    alert("Vitória do time " + A + ": " + C + " x " + D);
} else {
    alert("Vitória do time " + B + ": " + C + " x " + D);
}
}