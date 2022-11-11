function voto(){
    var numero1 = parseInt(document.getElementById("num").value);
    var numero2 = parseInt(document.getElementById("num1").value);
    var numero3 = parseInt(document.getElementById("num2").value);
    var numero4 = parseInt(document.getElementById("num3").value);

    if (numero3<0){
        alert("O valor do voto nulo é incompatível");
    }
    else{
        alert("O total de votos nulos é : "+numero3);
        alert("Porcentagem de Votos Nulos: " +numero3/numero1*100+"%");
    }

    if(numero2<0){
        alert("O valor de votos brancos é incompatível");
    }
    else{
        alert("O total de votos brancos é : "+numero2);
        alert("Porcentagem de Votos Brancos: " +numero2/numero1*100+"%");
    }

    if(numero4<0){
        alert("O valor de votos válidos é incompatível");
    }
    else{
        alert("O total de votos válidos é : "+numero4);
        alert("Porcentagem de Votos Válidos: " +numero4/numero1*100+"%");
    }

    if (numero1<0){
        alert("Valor inválido");
    }
    else{
        alert("O número de leitores é "+numero1);
    }
}