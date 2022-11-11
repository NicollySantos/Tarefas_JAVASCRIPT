function grau(){
    var fahrenheit = parseFloat(document.getElementById("num").value);
    var grau = (9*fahrenheit+160)/5;
    let div = document.getElementById("resultado");
    div.innerHTML = grau;
}
