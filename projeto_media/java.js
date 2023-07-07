const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando" />';
const imgReprovado = '<img src="images/reprovado.png" alt="emoji triste" />';



let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault(); // e sempre bom por isso.

const inputNomeAtividade = document.getElementById('nome-atividade');
const inpuNotaAtividade = document.getElementById('nota-atividade');



let linha = '<tr>';
linha += `<td> ${inputNomeAtividade.value} </td>`;
linha += `<td> ${inpuNotaAtividade.value} </td>`;
linha += `<td> ${inpuNotaAtividade.value >= 7 ? imgAprovado : imgReprovado } </td>`;
linha += '</tr>'

linhas += linha;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;

inputNomeAtividade.value = '';
inpuNotaAtividade.value = '';

});   