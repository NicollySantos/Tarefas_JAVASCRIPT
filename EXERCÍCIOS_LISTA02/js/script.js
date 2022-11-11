function idade(){
    var numero1 = parseInt(document.getElementById("num").value);
    var numero2 = parseInt(document.getElementById("num1").value);
    var numero3 = parseInt(document.getElementById("num2").value);
    var ar = (numero1*365)+(numero2*30)+numero3;
    let div = document.getElementById("resultado");
    div.innerHTML = ar;
}
