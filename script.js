document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Código para la visibilidad de las secciones
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        console.log('Checking visibility');
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollY;
            const sectionHeight = section.offsetHeight;

            if (scrollY + windowHeight > sectionTop + sectionHeight * 0.2) {
                console.log('Section is visible:', section.id);
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on load

    // Código para el botón de scroll hacia arriba
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
// Mostrar u ocultar la flecha según la posición de desplazamiento
window.addEventListener("scroll", function() {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 200) { // Mostrar al desplazarse 200px hacia abajo
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

// Desplazamiento suave hacia arriba al hacer clic en el botón
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0, // Lleva la página al inicio, directamente a top 0
        behavior: "smooth" // Desplazamiento suave
    });
    setTimeout(() => {
        window.scrollTo({
            top: -10, // Ajuste adicional
            behavior: "smooth"
        });
    }, 100); // Espera medio segundo después de llegar al top inicial
});