document.getElementById('form-criar-conta').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para não recarregar a página

    // Coletando os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // Verificando se as senhas coincidem
    if (senha !== confirmarSenha) {
        document.getElementById('mensagem-erro').innerText = 'As senhas não coincidem!';
        return;
    }

    // Verificando se o e-mail é um Gmail válido
    if (!email.includes('@gmail.com')) {
        document.getElementById('mensagem-erro').innerText = 'O e-mail deve ser um Gmail!';
        return;
    }

    // Verificando se o nome não está vazio
    if (nome.trim() === '') {
        document.getElementById('mensagem-erro').innerText = 'O nome completo é obrigatório!';
        return;
    }

    // Criando um objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        cpf: cpf,
        senha: senha
    };

    // Salvando os dados no LocalStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirecionando para a página de criação de perfil ou vendas
    window.location.href = 'file:///C:/Users/winin/OneDrive/%C3%81rea%20de%20Trabalho/site%20da%20manda/perfil/perfil.html'; // Alterar para o caminho correto da página de vendas
});
