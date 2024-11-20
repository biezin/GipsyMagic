document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll('.content-section');
    
    // Revelação das seções com efeito suave
    sections.forEach(function (section, index) {
        setTimeout(function () {
            section.classList.add('visible');
        }, index * 500);
    });

    // Efeito de animação nos ícones das redes sociais
    document.querySelectorAll('.social-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.transform = 'scale(1.1)';
            item.style.boxShadow = '0 0 20px #f39c12';
        });
        item.addEventListener('mouseleave', function () {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });
});
