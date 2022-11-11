function conta(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num2").value);
    var res = (A+B)/2;
    if (res >= 6) {
        alert("O aluno foi aprovado com a média "+res); 
    }
    else{
        alert("O aluno foi reprovado com a média "+res); 
    }
}
