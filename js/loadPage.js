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

function setCookie(name, value) {
  
  document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}

function loadFooter(savedLang){
  let footer = document.createElement("footer");
  if (document.querySelector("footer")){
    footer = document.querySelector("footer")
  }
  const parent = document.querySelector("body");
  
  footer.innerHTML = dataCategories[savedLang][dataCategories[savedLang].length - 1]["footer"];

  parent.appendChild(footer)
}

function loadCategories(lang) {
  const headerBtn = document.getElementById("sectionHeader");
  headerBtn.innerHTML = "";

  const parent = document.getElementById("contenu");
  parent.innerHTML = ""; // On vide le contenu

  dataCategories[lang].forEach(element => {
    let newCategorie = new Categorie(element);
    let toAdd = newCategorie.genererCategorie();
    if(toAdd){
      parent.appendChild(toAdd);
    }
  });

  // Sauvegarde dans cookie
  setCookie("lang", lang);

  // Met à jour le menu visuellement
  document.querySelectorAll(".lang-options li").forEach(li => {
    li.classList.toggle("active", li.dataset.lang === lang);
  });

  loadedPage = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = getCookie("lang") || "fr"; 
  loadCategories(savedLang);
  loadFooter(savedLang);
  const langSwitch = document.querySelector(".lang-switch");
  const langOptions = document.querySelectorAll(".lang-options li");
  const langLabel = document.createElement("span");
  langLabel.classList.add("lang-label");
  langLabel.textContent = txtByLang[savedLang];
  langSwitch.prepend(langLabel);
  
  langSwitch.addEventListener("click", () => {
    if(langSwitch.className.search("open")==-1){
      langSwitch.classList.toggle("open");
    }else{
      langSwitch.classList.remove("open");
    }
    
  });
  
  
  langOptions.forEach(option => {
  option.addEventListener("click", (e) => {
    const selectedLang = e.target.dataset.lang;
    loadCategories(selectedLang);
    
    loadFooter(selectedLang)
    langLabel.textContent = txtByLang[selectedLang]; 
     
    
  });
  
});
});
