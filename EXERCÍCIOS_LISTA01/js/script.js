function suc(){
    let numero = parseInt(document.getElementById("num").value);
    var suc = numero+1;
    let div = document.getElementById("resultado");
    div.innerHTML = suc;
    // alert("O sucessor é : "+suc);
}