function cont(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num1").value);
    var C = parseFloat(document.getElementById("num2").value);
    var nu = parseFloat(document.getElementById("num3").value);
    var br = parseFloat(document.getElementById("num4").value);
    var total = A + B + C + nu + br;
    alert ("O total de eleitores é: "+ total);
    alert("Votos de A .........: "+ (A*100/total)/6/2+ " %")
    alert("Votos de B .........: "+ (B*100/total)/6/2+ " %")
    alert("Votos de C .........: "+ (C*100/total)/6/2+ " %")
    alert("Votos nulos.........: "+ (nu*100/total)/6/2+ " %")
    alert("Votos brancos.......: "+ (br*100/total)/6/2+ " %")
}
