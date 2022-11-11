function conta(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num2").value);
    var res = A-B;
    if (res >= 16) {
        alert ("Você vai poder votar");
        alert ("Você tem "+ res+ " anos de idade");
    }
    else{
        alert ("Não poderá votar");
        alert ("Você tem "+ res+ " anos de idade");
    }
}