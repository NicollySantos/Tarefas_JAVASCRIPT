function conta(){
    var A = parseInt(document.getElementById("num").value);
    var B = parseInt(document.getElementById("num2").value);
    
    if (A < 160) {
        var salarioFinal = A * B;
        alert("O salário final corresponde a : R$ "+salarioFinal);

    }
    else{
     var horaExtra = A - 160;
     var salarioHoraExtra = (((horaExtra*B*50/100)+B)*horaExtra);
     var salarioFinal = salarioHoraExtra+(160*B);
      alert("O salário final corresponde a : R$ " + salarioFinal);

    }
}
 
   
