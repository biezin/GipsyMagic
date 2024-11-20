// Adicionando um efeito mágico quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('.content-section');
    
    // Revelação das seções com um pequeno atraso para cada uma
    sections.forEach(function(section, index) {
        setTimeout(function() {
            section.classList.add('visible');
        }, index * 500); // Delay de animação para cada seção
    });
});

// Efeito de brilho no menu ao passar o mouse
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.transition = 'all 0.5s ease';
        item.style.textShadow = '0 0 20px #f39c12, 0 0 30px #8e44ad';
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', function() {
        item.style.textShadow = 'none';
        item.style.transform = 'scale(1)';
    });
});
