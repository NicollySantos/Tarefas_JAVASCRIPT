function conta(){
    var A = parseInt(document.getElementById("num").value);
    var B = parseInt(document.getElementById("num2").value);
    var C = parseInt(document.getElementById("num3").value);
    var media = (B + C)/2;
    alert("A quantidade média do estoque é: "+ media);
   
    if (A >= media) {
      alert("Não efetuar compra");
    }
    else{
      alert("Efetuar compra");

    }
}
 
   
