function conta(){
    var A = parseInt(document.getElementById("num").value);
    var B = parseInt(document.getElementById("num2").value);
    var C = parseInt(document.getElementById("num3").value);
    var D = parseInt(document.getElementById("num4").value);
    var saldo_at = B - C + D;
    alert("O saldo atual do cliente é: " + saldo_at);

    if (saldo_at <= 0) {
      alert("Saldo Ngativo");
    }
    else{
      alert("Saldo Positivo");

    }
}
 
   
