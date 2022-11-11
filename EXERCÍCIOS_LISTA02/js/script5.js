function grau(){
    var celsius = parseFloat(document.getElementById("num").value);
    var grau = (9*celsius+160)/5;
    let div = document.getElementById("resultado");
    div.innerHTML = grau;
}
