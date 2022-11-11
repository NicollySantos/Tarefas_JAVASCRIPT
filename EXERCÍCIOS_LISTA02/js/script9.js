function prest(){
    var valor = parseFloat(document.getElementById("num").value);
    var taxa = parseFloat(document.getElementById("num1").value);
    var tempo = parseFloat(document.getElementById("num2").value);
    var prest = valor + (valor * (taxa/100) * tempo);
    let div = document.getElementById("resultado");
    div.innerHTML = prest;
    
}
