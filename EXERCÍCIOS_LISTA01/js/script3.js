function soma(){
    let numero = parseInt(document.getElementById("num").value);
    let numero2 = parseInt(document.getElementById("num1").value);
    var soma = numero+numero2;
    let div = document.getElementById("resultado");
    div.innerHTML = soma;
}