function per(){
    var vCustoFabrica = parseFloat(document.getElementById("num").value);
    var per = vCustoFabrica + (vCustoFabrica*28) + (vCustoFabrica*45/100);
    let div = document.getElementById("resultado");
    div.innerHTML = per;
}
