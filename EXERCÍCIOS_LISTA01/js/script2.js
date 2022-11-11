function ant(){
    let numero = parseInt(document.getElementById("num").value);
    var ant = numero-1;
    let div = document.getElementById("resultado");
    div.innerHTML = ant;
}