const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando" />';
const imgReprovado = '<img src="images/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class ="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class ="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota minima'))

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault(); // e sempre bom por isso.

    adicionaLinha();
    atualizarTabela();
    atualizaMediaFinal()

});   


function adicionaLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inpuNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) { //include e para ver se ja tem algo
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida.`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inpuNotaAtividade.value));
    
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value} </td>`;
        linha += `<td> ${inpuNotaAtividade.value} </td>`;
        linha += `<td> ${inpuNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`;
        linha += '</tr>'
        
        linhas += linha;
    }


inputNomeAtividade.value = '';
inpuNotaAtividade.value = '';
}

function atualizarTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let SomaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        SomaDasNotas += notas[i];
    }

    return SomaDasNotas / notas.length;
}