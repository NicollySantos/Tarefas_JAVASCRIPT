function conta(){
    var A = parseInt(document.getElementById("num").value);
    var B = parseInt(document.getElementById("num2").value);
    
    if (B > A) {
        var horas = B - A;	
        alert("A duração da partida foi de : "+ horas +" Horas")    

    }
    else{
        var horas = (24 - A) + B;	
        alert("A duração da partida foi de : "+ horas +" Horas")    

    }
}
 
   
