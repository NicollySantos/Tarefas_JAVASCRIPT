var contadora = 1;
var menor =0;
var maior =0;
while (contadora>0) {
    var numero = parseInt(prompt("Digite um numero positivo ou para encerrar digite um negativo"));
    
    if (numero<0) {
        menor = numero;
        contadora = contadora-20;
    }
    else{
        if (numero>maior) {
            maior = numero;                
        }
        else{
            menor = numero;
        }   
    }
            
}  
        
document.write("O maior e o menor valor digitado respectivamente foi: " + maior + " e " + menor);


