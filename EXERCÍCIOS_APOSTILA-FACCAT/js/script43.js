function conta(){  
    
    var ladoA = parseFloat(document.getElementById("num1").value);
    var ladoB = parseFloat(document.getElementById("num2").value);
    var ladoC = parseFloat(document.getElementById("num3").value);
    let tipoTriangulo;
    
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        if (ladoA == ladoB && ladoB == ladoC) {
            tipoTriangulo = "Triângulo Equilátero.";
        } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
            tipoTriangulo = "Triângulo Escaleno.";
        } else {
            tipoTriangulo = "Triângulo Isósceles.";
        }
    } else {
        tipoTriangulo = "Não é possível formar um triângulo."
    }
    
    alert(tipoTriangulo);
}