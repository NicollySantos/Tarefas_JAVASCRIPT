function conta(){  
    var nota1 = parseFloat(document.getElementById("num1").value);
    var nota2 = parseFloat(document.getElementById("num2").value);
    var nota3 = parseFloat(document.getElementById("num3").value);
    var nota4 = parseFloat(document.getElementById("num4").value);

var mediaAproveitamento = ((nota1 + nota2) * 2 + nota3 * 3 + nota4) / 7;

if (mediaAproveitamento >= 9) {
    alert("Média de aproveitamento: " + mediaAproveitamento.toFixed(2) + " | Conceito do Aluno: A");
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
    alert("Média de aproveitamento: " + mediaAproveitamento.toFixed(2) + " | Conceito do Aluno: B");
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
    alert("Média de aproveitamento: " + mediaAproveitamento.toFixed(2) + " | Conceito do Aluno: C");
} else {
    alert("Média de aproveitamento: " + mediaAproveitamento.toFixed(2) + " | Conceito do Aluno: D");
}
}