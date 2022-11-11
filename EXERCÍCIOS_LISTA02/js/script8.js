function vel(){
    var tempo = parseFloat(document.getElementById("num").value);
    var velo = parseFloat(document.getElementById("num1").value);
    var vel = tempo*velo;
    var vel1 = (tempo*velo)/12;
    alert("A distância percorrida foi de "+vel+" KM/H");
    alert("O consumo foi de "+vel1);
    
}
