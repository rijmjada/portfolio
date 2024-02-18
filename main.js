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






let elementosHex = document.querySelectorAll('.hex');
let index = 0;
let subIndex = 0;

function cambiarOpacidad() {
    if (index < elementosHex.length) {
        if (subIndex === 0) {
            elementosHex[index].classList.add('opacidad-1');
        } else {
            elementosHex[index].classList.remove('opacidad-1');
            index++;
        }
        subIndex = 1 - subIndex;
    } else {
        // Reiniciar el índice cuando se procesan todos los elementos
        index = 0;
    }
}

// Configurar un intervalo para cambiar la opacidad cada 500 milisegundos
let intervalId = setInterval(cambiarOpacidad, 500);


