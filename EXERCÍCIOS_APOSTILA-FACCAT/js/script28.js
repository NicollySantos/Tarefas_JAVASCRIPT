function conta(){
  var A = parseInt(document.getElementById("num1").value);
  var B = parseInt(document.getElementById("num2").value);
  var C = parseInt(document.getElementById("num3").value);

  if (A == B || B == C || C == A) {
    alert("Digite apenas valores diferentes!");
} else if (A > B && A > C) {
    alert("O maior valor digitado foi " + A);
} else if (B > A && B > C) {
    alert("O maior valor digitado foi " + B);
} else {
    alert("O maior valor digitado foi " + C);
}
   
}
 
   
