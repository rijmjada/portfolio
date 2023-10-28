let typingText = new Typed(".change-text", {
    strings: ["Estudiante", "Developer", "Full-Stack", "Coding ❤", "Progammer",],
    loop: true,
    typeSpeed: 65,
    backSpeed: 45,
    backDelay: 1200,
});


// Función para mostrar u ocultar el botón según el desplazamiento de la página
function toggleScrollButton() {
    const scrollButton = document.querySelector('#scrollButton');
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// Función para hacer scroll hasta arriba
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Agregar el evento de scroll al botón
document.addEventListener('scroll', toggleScrollButton);

// Agregar el evento de click al botón
const scrollButton = document.querySelector('#scrollButton');
scrollButton.addEventListener('click', scrollToTop);
