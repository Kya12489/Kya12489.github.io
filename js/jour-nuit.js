const toggleButton = document.getElementById("jour/nuit");
const themeIcon = toggleButton.querySelector("img");

let modeNuit = false;
let angle = 0;

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

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
    document.cookie = `theme=${modeNuit}; path=/`;
  }, 175); // Moitié du temps d'animation
  
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = getCookie("theme");

  if (theme === "true") {
    // Appliquer le thème nuit
    document.body.classList.add("nuit");
    document.querySelector("header").classList.add("header-nuit");
    themeIcon.src = "element/image/moon.png";
    modeNuit = true;
    angle = 180;
    themeIcon.style.transform = `rotate(${angle}deg)`;
  }
});