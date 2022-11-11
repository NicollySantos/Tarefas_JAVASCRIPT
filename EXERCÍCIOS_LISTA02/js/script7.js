function vol(){
    var altura = parseFloat(document.getElementById("num").value);
    var raio = parseFloat(document.getElementById("num1").value);
    var vol = 3.14*(raio*raio)*altura;
    let div = document.getElementById("resultado");
    div.innerHTML = vol;
}
