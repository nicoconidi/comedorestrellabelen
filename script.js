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
