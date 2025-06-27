// Gestion du thème jour/nuit
    const toggleButton = document.getElementById("jour/nuit");
    const themeIcon = toggleButton.querySelector("img");
    let modeNuit = true; // Mode nuit par défaut
    let angle = 0;

    // Base64 des icônes SVG
    const moonIcon = "element/image/moon.png";
    const sunIcon = "element/image/sun.png";

    function getCookie(name) {
      const cookies = document.cookie.split('; ');
      for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
      }
      return null;
    }

    function changeMode() {
      angle += 180;
      themeIcon.style.transform = `rotate(${angle}deg)`;
      
      setTimeout(() => {
        modeNuit = !modeNuit;
        themeIcon.src = modeNuit ? moonIcon : sunIcon;
        document.body.classList.toggle("jour", !modeNuit);
        document.cookie = `theme=${modeNuit}; path=/; max-age=31536000`; // 1 an
      }, 175);
    }

    toggleButton.addEventListener("click", changeMode);

    // Initialisation au chargement
    window.addEventListener("DOMContentLoaded", () => {
      const theme = getCookie("theme");
      // Si pas de cookie, rester en mode nuit (défaut)
      if (theme === "false") {
        changeMode(); // Passer en mode jour
      }
      // Sinon rester en mode nuit par défaut
    });