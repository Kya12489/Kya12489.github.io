let loadedPage = false;
let txtByLang = {
  "fr": "🇫🇷  Français",
  "eng": "🇺🇸 English"
}
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

function setCookie(name, value, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}

function loadCategories(lang) {
  const headerBtn = document.getElementById("sectionHeader");
  headerBtn.innerHTML = "";

  const parent = document.getElementById("contenu");
  parent.innerHTML = ""; // On vide le contenu

  dataCategories[lang].forEach(element => {
    let newCategorie = new Categorie(element);
    parent.appendChild(newCategorie.genererCategorie());
  });

  // Sauvegarde dans cookie
  setCookie("lang", lang);

  // Met à jour le menu visuellement
  document.querySelectorAll(".lang-options li").forEach(li => {
    li.classList.toggle("active", li.dataset.lang === lang);
  });

  loadedPage = true;
}

// ✅ Tout dans DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Charger la langue sauvegardée
  const savedLang = getCookie("lang") || "fr"; // par défaut français
  loadCategories(savedLang);
  // 2. Gestion du menu déroulant
  const langSwitch = document.querySelector(".lang-switch");
  const langOptions = document.querySelectorAll(".lang-options li");
  const langLabel = document.createElement("span");
langLabel.classList.add("lang-label");
langLabel.textContent = txtByLang[savedLang];
langSwitch.prepend(langLabel);
  
  langSwitch.addEventListener("click", () => {
    langSwitch.classList.toggle("open");
  });
  
  
  langOptions.forEach(option => {
  option.addEventListener("click", (e) => {
    const selectedLang = e.target.dataset.lang;
    loadCategories(selectedLang);
    langSwitch.classList.remove("open");
    langLabel.textContent = txtByLang[selectedLang]; // Met à jour le label

  });
  
});
});
