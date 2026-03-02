// =======================
// MENÚ DESPLEGABLE
// =======================
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

if(btnMenu && menu){
    // Mostrar/ocultar menú al hacer clic
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('mostrar'); // alterna la clase mostrar
    });

    // Cerrar menú si se hace clic fuera
    window.addEventListener('click', (e) => {
        if(e.target !== btnMenu && !menu.contains(e.target)){
            menu.classList.remove('mostrar');
        }
    });
}

// =======================
// BOTÓN HORARIO DE ATENCIÓN
// =======================
const btnInfo = document.getElementById("btnInfo");
const mensaje = document.getElementById("mensaje");

if(btnInfo && mensaje){
    // Oculto inicialmente
    mensaje.style.display = "none";

    // Toggle mensaje al hacer clic
    btnInfo.addEventListener("click", () => {
        mensaje.style.display = mensaje.style.display === "none" ? "block" : "none";
    });
}

// =======================
// ANIMACIONES DE SECCIONES
// =======================
const secciones = document.querySelectorAll("section");

secciones.forEach(seccion => {
    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(40px)";

    // Efecto hover: escala
    seccion.addEventListener("mouseenter", () => {
        seccion.style.transform = "scale(1.02)";
        seccion.style.transition = "0.3s";
    });

    seccion.addEventListener("mouseleave", () => {
        seccion.style.transform = "scale(1)";
    });
});

// Efecto al hacer scroll
window.addEventListener("scroll", () => {
    secciones.forEach(seccion => {
        const posicion = seccion.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";
            seccion.style.transition = "0.6s";
        }
    });
});