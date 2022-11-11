function conta(){
  var valorX = parseInt(document.getElementById("num1").value);
  var valorY = parseInt(document.getElementById("num2").value);

  var valorZ = valorX * valorY + 5;
  var resposta;

if (valorZ < 0) {
    resposta = " é menor do que 0! Resposta A";
} else if (valorZ < 100){
    resposta = " é menor do que 100! Resposta B";
} else {
    resposta = " é maior do 100! Resposta C";
}

alert(valorZ + resposta);
}