window.onload = function() {
    const logoContainer = document.getElementById("logo-container");
    const linksContainer = document.getElementById("links-container");
    const secondLogo = document.querySelector(".profile-move");
    const footer = document.querySelector('footer');

    // Oculta inicialmente links, segundo logo y footer
    linksContainer.style.display = "none";
    secondLogo.style.display = "none";
    document.querySelector('footer').style.display = "none";

    // Animación logo principal
    setTimeout(() => {
        logoContainer.style.transform = "translate(-50%, -50%) scale(2)";
        logoContainer.style.opacity = "0";
    }, 1000);

    // Finalización de animación y muestra de elementos ocultos
    setTimeout(() => {
        logoContainer.style.display = "none";
        linksContainer.style.display = "flex";
        secondLogo.style.display = "block";
        document.querySelector('footer').style.display = 'block'; // Ahora aparece el footer
        document.body.style.overflow = "auto";
    }, 2000);
};

function toggleEmails(id) {
    const emailContainer = document.getElementById(id);
    if (emailContainer) {
        emailContainer.style.display = (emailContainer.style.display === "none" || emailContainer.style.display === "")
            ? "block" : "none";
    }
}

// Ajustar tamaño del logo en dispositivos pequeños
window.addEventListener("resize", function() {
    const logos = document.querySelectorAll(".logo");
    logos.forEach(logo => {
        if (window.innerWidth < 768) {
            logo.style.width = "120px";
            logo.style.height = "120px";
        } else {
            logo.style.width = "150px";
            logo.style.height = "150px";
        }
    });
});
