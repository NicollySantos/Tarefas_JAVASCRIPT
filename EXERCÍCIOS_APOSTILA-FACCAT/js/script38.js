function conta(){  
var codigoDigitado = parseInt(document.getElementById("num1").value);
var codigoCadastrado = 1234;
var senhaCadastrada = 9999;
var senhaDigitada;

if (codigoDigitado == codigoCadastrado) {
    senhaDigitada = parseInt(document.getElementById("num2").value);
    if (senhaDigitada == senhaCadastrada) {
        alert("Acesso permitido!")
    } else {
        alert("Senha incorreta!");
    }
} else {
    alert("Usuário inválido!");
}
}