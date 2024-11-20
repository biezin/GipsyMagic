// Função para mostrar a pré-visualização da foto de perfil e mudar moldura
function previewImage() {
    const file = document.getElementById('fotoPerfil').files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.getElementById('img-preview');
        img.src = e.target.result;

        // Exibir o ícone de gênero
        const genero = document.getElementById('sexo').value;
        const generoIcon = document.getElementById('genero-icon');

        if (genero === 'masculino') {
            generoIcon.style.backgroundImage = "url('imagens/masculino-icon.png')";
        } else {
            generoIcon.style.backgroundImage = "url('imagens/feminino-icon.png')";
        }
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

// Função para mudar a moldura
function changeMoldura() {
    const molduraSelecionada = document.getElementById('moldura').value;
    const previewContainer = document.getElementById('preview-container');
    
    // Remove qualquer moldura anterior
    previewContainer.classList.remove('moldura1', 'moldura2', 'moldura3', 'moldura4', 'moldura5');
    
    // Adiciona a nova moldura
    previewContainer.classList.add(molduraSelecionada);
}

// Formulário de criação de perfil
document.getElementById('form-criar-perfil').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const sexo = document.getElementById('sexo').value;
    const moldura = document.getElementById('moldura').value;

    // Salvar os dados no LocalStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('dataNascimento', dataNascimento);
    localStorage.setItem('sexo', sexo);
    localStorage.setItem('moldura', moldura);

    // Redirecionar para a página de vendas
    window.location.href = 'file:///C:/Users/winin/OneDrive/%C3%81rea%20de%20Trabalho/site%20da%20manda/pagina%20de%20venda/venda.html';
});
