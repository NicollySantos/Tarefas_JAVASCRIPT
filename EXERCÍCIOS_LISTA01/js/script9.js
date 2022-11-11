function ar(){
    let numero1 = parseInt(document.getElementById("num").value);
    var ar = numero1*numero1;
    let div = document.getElementById("resultado");
    div.innerHTML = ar;
}