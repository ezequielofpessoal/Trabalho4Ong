// Função para validar o formulário
function validateForm(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    // Adicione outras validações conforme necessário

    if (!nome || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    // Se tudo estiver correto, enviar o formulário
    alert('Formulário enviado com sucesso!');
    return true;
}

// Adicionar evento de validação ao formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});