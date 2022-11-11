function sal(){
    var numero1 = parseFloat(document.getElementById("num").value);
    var numero2 = parseFloat(document.getElementById("num1").value);
    var sal = numero1 + (numero2/100) * numero1;
    let div = document.getElementById("resultado");
    div.innerHTML = sal;
}
