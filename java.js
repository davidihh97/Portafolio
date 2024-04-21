$(document).ready(function(){
    // Inicializar el carrusel de imágenes
    $('.slick-slider').slick();

    // Inicializar efectos de desplazamiento
    ScrollReveal().reveal('.animate__animated', { delay: 500, duration: 1000 });
});