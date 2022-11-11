function multi(){
    let numero = parseInt(document.getElementById("num").value);
    var numero2 = parseInt(document.getElementById("num1").value);
    var multi = numero*numero2;
    let div = document.getElementById("resultado");
    div.innerHTML = multi;
}