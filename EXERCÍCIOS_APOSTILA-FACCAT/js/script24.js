function conta(){
    var A = parseInt(document.getElementById("num").value);
    var B = parseInt(document.getElementById("num2").value);
    
    if (B > 1500) {
      var sal_final = A + sal_final * (5/100);
      alert("Seu salário final será R$" + sal_final);
    }
    else{
      var sal_final = A + A * (3/100);
      alert("Seu salário final será R$" + sal_final);

    }
}
 
   
