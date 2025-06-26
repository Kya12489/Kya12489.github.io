const toggleButton = document.getElementById("jour/nuit");
const themeIcon = toggleButton.querySelector("img");

let modeNuit = false;
let angle = 0;

toggleButton.addEventListener("click", () => {
  // Incrémentation de 180°
  angle += 180;

  // Appliquer la rotation
  themeIcon.style.transition = "transform 1s ease";
  themeIcon.style.transform = `rotate(${angle}deg)`;

  // À mi-parcours (après 0.5s), changer l’image + thème
  setTimeout(() => {
    modeNuit = !modeNuit;

    // Mise à jour de l’image
    themeIcon.src = modeNuit ? "element/image/moon.png" : "element/image/sun.png";

    // Thème clair/sombre
    document.body.classList.toggle("nuit", modeNuit);
    document.querySelector("header").classList.toggle("header-nuit", modeNuit);
  }, 175); // Moitié du temps d'animation
});