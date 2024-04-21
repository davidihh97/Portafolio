document.addEventListener("DOMContentLoaded", function () {
    const sectionTitles = document.querySelectorAll(".section-title");

    // Función para animar los títulos de sección
    function animateSectionTitles() {
        sectionTitles.forEach((title, index) => {
            const delay = (index + 1) * 200; // Ajusta el retraso entre las animaciones
            setTimeout(() => {
                title.classList.add("animate");
            }, delay);
        });
    }

    // Llamar a la función cuando se cargue la página
    window.addEventListener("load", animateSectionTitles);
});
