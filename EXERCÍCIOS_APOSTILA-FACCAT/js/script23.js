function conta(){
    var A = parseInt(document.getElementById("num").value);
    var B = String(document.getElementById("num2").value);
    var C = parseInt(document.getElementById("num3").value);
    
    if (B = "F") {
        var peso_ideal = C * 62.1 - 44.7;
        var peso_ideal = peso_ideal * (-1);
        alert("Seu peso ideal é " + peso_ideal + " quilos")
    }
    else{
        peso_ideal = altura * 72.7 - 58;
        peso_ideal = peso_ideal * (-1);
        escreval("Seu peso ideal é " + peso_ideal +" quilos")

    }
}
 
   
