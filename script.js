document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del menú móvil (el que ya teníamos)
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Esto evita que la página se mueva detrás del menú abierto
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

    // 2. Animación de entrada escalonada
    const elementsToAnimate = [
        document.querySelector('.logo-wrapper'),
        ...document.querySelectorAll('.nav-menu li'),
        document.querySelector('.main-logo'),
        document.querySelector('.btn-cook'),
        document.querySelector('.char-img'),
        document.querySelector('.arrow-left'),
        document.querySelector('.arrow-right')
    ];

    elementsToAnimate.forEach((el, index) => {
        if(el) {
            // Aplicamos un retraso basado en la posición del elemento
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 100); // 100ms de diferencia entre cada uno
        }
    });


    document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
});