function conta(){
    var A = parseFloat(document.getElementById("num").value);
    if (A > 12) {
        var res = A;
        alert("O custo é de R$ "+res); 
    }
    else{
        var res = A * 1.30;
        alert("O custo é de R$ "+res);
    }
}
