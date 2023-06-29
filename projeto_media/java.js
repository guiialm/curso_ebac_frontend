const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // e sempre bom por isso.

const inputNomeAtividade = document.getElementById('nome-atividade');
const inpuNotaAtividade = document.getElementById('nota-atividade');

alert(`Atividade ${inputNomeAtividade.value} - nota: ${inpuNotaAtividade.value}`);

});   