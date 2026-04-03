document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // relativo al viewport
        threshold: 0.2 // se activa cuando el 20% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase 'visible' al elemento que entró en el viewport
                entry.target.classList.add("visible");
                
                // Opcional: dejar de observar una vez que ya se mostró
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos el header y todas las tarjetas para observar
    const elementosAnimar = document.querySelectorAll(".header-reino, .card-mundo");
    
    elementosAnimar.forEach(el => observer.observe(el));


    const slider = document.getElementById('chefSlider');
    const prevBtn = document.getElementById('prevChef');
    const nextBtn = document.getElementById('nextChef');

    nextBtn.addEventListener('click', () => {
        // Desplaza el ancho de una tarjeta + el gap
        const scrollAmount = slider.clientWidth / (window.innerWidth > 768 ? 3 : 1);
        slider.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener('click', () => {
        const scrollAmount = slider.clientWidth / (window.innerWidth > 768 ? 3 : 1);
        slider.scrollLeft -= scrollAmount;
    });
});