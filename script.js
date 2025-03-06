const form = document.getElementById('formulario');
const numeroA = document.getElementById('numeroa');
const numeroB = document.getElementById('numerob');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorA = parseFloat(numeroA.value);
    const valorB = parseFloat(numeroB.value);

    if (valorB > valorA) {
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    } else {
        mensagemSucesso.style.display = 'none';
        mensagemErro.style.display = 'block';
    }
});