function conta(){  
   
    var valor1 = parseInt(document.getElementById("num1").value);
    do {
        var valor2 = parseInt(document.getElementById("num2").value);
    } while (valor2 > 0);
    var result = valor1/valor2;
    alert(valor1 +" dividido por "+valor2+" é: "+ result);
   
}