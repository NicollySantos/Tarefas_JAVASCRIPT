function troca(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num1").value);
    var troca = A;
    var A = B;
    var B = troca;
    alert("O novo valor de A é "+B);
    alert("O novo valor de B é "+A);
    
}
