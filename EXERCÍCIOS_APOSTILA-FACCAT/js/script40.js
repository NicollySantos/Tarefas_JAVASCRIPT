function conta(){  
    var nome = document.getElementById("num1").value;
    var quantidade = parseInt(document.getElementById("num2").value);
    var precoUnitario = parseFloat(document.getElementById("num3").value);
    var total = 0.0;
    var totalApagar = 0.0;
    var desconto = 0.0;
    
    total = quantidade * precoUnitario;
    if (quantidade <= 5) {
        totalApagar = total * 0.98;
        desconto = total - totalApagar;
    } else if (quantidade > 5 && quantidade <= 10) {
        totalApagar = total * 0.97;
        desconto = total - totalApagar;
    } else {
        totalApagar = total * 0.95;
        desconto = total - totalApagar;
    }
    
    alert("Produto: " + nome + ", o total foi de: R$ " + total.toFixed(2) + " reais.");
    alert("Produto: " + nome + ", o valor de desconto foi de: R$ " + desconto.toFixed(2) + " reais.");
    alert("Produto: " + nome + ", o valor total a pagar é: R$ " + totalApagar.toFixed(2) + " reais.");
}