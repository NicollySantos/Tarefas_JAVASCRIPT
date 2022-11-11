function conta(){  

    var valor1 = parseFloat(document.getElementById("num1").value);
    do {
        var valor2 = parseFloat(document.getElementById("num2").value);

        if (valor2==0) {
            alert("Valor 2 é inválido");     
        }
    } while (valor2 > 0);
    var result = valor1/valor2;
    alert(valor1 +" dividido por "+valor2+" é: "+ result);
   
}