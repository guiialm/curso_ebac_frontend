function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
    document.getElementById("mensagem").innerHTML = "Formulário válido!";
    document.getElementById("mensagem").style.color = "green";
    } else {
    document.getElementById("mensagem").innerHTML = "Formulário inválido!";
    document.getElementById("mensagem").style.color = "red";
    }
}