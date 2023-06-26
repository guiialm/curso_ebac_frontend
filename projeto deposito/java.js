const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario');

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
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-menssage').style.display = 'block';
    } else {
        const containerMensagemSucesso = document.querySelector('.sucess-mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    }


})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = (validaNome(e.target.value))

    if (!formEValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-mensagge').style.display = 'block';
        
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-menssage').style.display = 'none';
    }
})