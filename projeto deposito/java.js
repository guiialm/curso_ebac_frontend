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
    const nomeMaiusculo = nomeBeneficiario.value.toUpperCase();
    const mensagemSucesso = `Montante de R$: <b>${valorDeposito.value}</b><b>,00</b> depositado para <b>${nomeMaiusculo}</b>; conta : <b>${numeroContaBeneficiario.value}</b>`
    


    formEValido = (!validaNome(nomeBeneficiario.value)) 
    if (formEValido) {
        alert('ERROR 404')
    } else {
        const containerMensagemSucesso = document.querySelector('.sucess-mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'

        nomeBeneficiario.value = '';
        numeroContaBeneficiario = '';
        valorDeposito = '';
    }


})

console.log(form);