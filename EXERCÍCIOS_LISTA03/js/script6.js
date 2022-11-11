function cont(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num1").value);
    var C = parseFloat(document.getElementById("num2").value);
    var res = (A + A)*(B + B)*(C + C);
    let div = document.getElementById("resultado");
    div.innerHTML = res;
}
