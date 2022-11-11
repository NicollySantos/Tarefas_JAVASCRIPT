 function conta(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num2").value);
    
    if (A > B) {
        alert("O maior valor é: " + A + ".");	
    }

    if (A < B) {
            alert("O maior valor é: " + B + ".");	
    }

    else if(A = B){
            alert("Os dois valores são iguais!");	
    }

   
   
}