function ar(){
    var numero1 = parseInt(document.getElementById("num").value);
    var numero2 = parseInt(document.getElementById("num1").value);
    var numero3 = parseInt(document.getElementById("num2").value);

    var ar = (numero1*numero2)*numero3/2;
    let div = document.getElementById("resultado");
    div.innerHTML = ar;
}