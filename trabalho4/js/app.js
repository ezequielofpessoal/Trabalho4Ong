// app.js

// Função para carregar o conteúdo da página
function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
}

// Configurar navegação
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href');
            loadPage(page);
        });
    });

    // Carregar a página inicial por padrão
    loadPage('index.html');
});