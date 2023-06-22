const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split (' '); 
    return nomeComoArray.length >= 2; /* tem que ter dois nomes no nome completo */
    

}

form.addEventListener('submit', function(e){
    var formEValido = false;


    e.preventDefault(); /* vai fazer com que o submit não apague tudo */ 

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');


    formEValido = (!validaNome(nomeBeneficiario.value)) 
    if (formEValido) {
        alert('ERROR 404')
    } else {
        alert('tudo ok!')
    }


})

console.log(form);