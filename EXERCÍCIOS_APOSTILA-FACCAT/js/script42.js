function conta(){  
    var codigo = parseInt(document.getElementById("num1").value);
    var anoNascimento = parseInt(document.getElementById("num2").value);
    var anoIngresso = parseInt(document.getElementById("num3").value);

    var aposentadoria;
    
    var idade = 2022 - anoNascimento;
    var anosTrabalhado = 2022 - anoIngresso;
    if (idade >= 65) {
        aposentadoria = "Requerer aposentadoria";
    } else if (anosTrabalhado >= 30) {
        aposentadoria = "Requerer aposentadoria";
    } else {
        aposentadoria = "Não requerer aposentadoria";
    }
    
    alert("Empregado código: " + codigo + " | Idade: " + idade + " anos.");
    alert("Tempo trabalhado: " + anosTrabalhado + " anos.");
    alert("Situação: " + aposentadoria);
}