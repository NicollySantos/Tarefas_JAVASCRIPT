function conta(){
    var A = parseFloat(document.getElementById("num").value);
    var B = parseFloat(document.getElementById("num1").value);
    var C = parseFloat(document.getElementById("num2").value);
    var D = parseFloat(document.getElementById("num3").value);
    var adicao1 = A+B;
    var adicao2 = A+C;
    var adicao3 = A+D;
    var adicao4 = B+D;
    var adicao5 = B+C;
    var adicao6 = C+D;
    var multi1 = A*B;
    var multi2 = A*C;
    var multi3 = A*D;
    var multi4 = B*C;
    var multi5 = B*D;
    var multi6 = C*D;
    alert ("A primeira adição será A+B: "+ adicao1);
    alert ("A segunda adição será A+C: "+ adicao2);
    alert ("A terceira adição será A+D: "+ adicao3);
    alert ("A quarta adição será B+C: "+ adicao4);
    alert ("A quinta adição será B+D: "+ adicao5);
    alert ("A sexta adição será C+D: "+adicao6);
    alert ("A primeira multiplicação será A X B: "+ multi1);
    alert ("A segunda multiplicação será A X C: "+ multi2);
    alert ("A terceira multiplicação será A X D: "+ multi3);
    alert ("A quarta multiplicação será B X C: "+ multi4);
    alert ("A quinta multiplicação será B X D: "+ multi5);
    alert ("A sexta multiplicação será C X D: "+ multi6);

    
}
