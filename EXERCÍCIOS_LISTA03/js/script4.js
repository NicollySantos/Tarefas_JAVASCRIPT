function cont(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num1").value);
    var res = A * B;
    let div = document.getElementById("resultado");
    div.innerHTML = res;

    
}
