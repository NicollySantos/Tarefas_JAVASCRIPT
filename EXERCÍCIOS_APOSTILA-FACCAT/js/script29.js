function conta(){
  var A = parseInt(document.getElementById("num1").value);
  var B = parseInt(document.getElementById("num2").value);
  var C = parseInt(document.getElementById("num3").value);
  var result1 = A + B;
  var result2 = C + B;
  var result3 = A + C;
  if (A == B || B == C || C == A) {
    alert("Digite apenas valores diferentes!");
} else if (A > B) {
    alert("Os maiores valores digitados foram A(" + A + ") e B(" +B+") = " +result1);
} else if (B > A) {
    alert("Os maiores valores digitados foram B(" + B + ") e A(" +A+") = " +result1);
} else if (C > B){
    alert("Os maiores valores digitados foram C(" + C + ") e B(" +B+") = " +result2);
}else if (B > C){
    alert("Os maiores valores digitados foram B(" + B + ") e C(" +C+") = " +result2);
}else if (C > A){
    alert("Os maiores valores digitados foram C(" + C + ") e A(" +A+") = " +result3);
}else if (C > B){
    alert("Os maiores valores digitados foram C(" + C + ") e B(" +B+") = " +result3);
}else{
    alert("Nenhum valor válido!");
}
   
}
 
   
