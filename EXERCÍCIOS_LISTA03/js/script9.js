function cont(){
    var SM = parseFloat(document.getElementById("num").value);
    var PR = parseFloat(document.getElementById("num1").value);
    var res = SM + (PR/100) * SM
    let div = document.getElementById("resultado");
    div.innerHTML = res;
}
