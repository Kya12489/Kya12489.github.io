document.addEventListener("DOMContentLoaded",function(){
  function callPage(pageUrl) {
    if(pageUrl!=="accueil"){
      pageUrl="projet/"+pageUrl;
    }
    // Charger d'abord le contenu HTML
    fetch("pages/" + pageUrl + "/handler.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Page introuvable");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("contenu").innerHTML = data;
            
            // Essayer de charger la liste JSON pour cette page
            return fetch("pages/" + pageUrl + "/liste.json");
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            // Si pas de JSON, retourner null
            return null;
        })
        .then(jsonData => {
            if (jsonData) {
                // Créer la grille de projets si des données JSON existent
                createProjectGrid(jsonData, pageUrl);
            }
            
            // Mettre à jour les catégories dans l'en-tête
            updateHeaderCategories(pageUrl);
        })
        .catch(error => {
            document.getElementById("contenu").innerHTML = 
                '<div class="error-message">Erreur : ' + error.message + '</div>';
        });
}

function createProjectGrid(projects, currentPath) {
    // Chercher un conteneur existant ou en créer un
    let projectContainer = document.getElementById("projects-container");
    
    if (!projectContainer) {
        projectContainer = document.createElement("div");
        projectContainer.className = "projects-grid";
        projectContainer.id = "projects-container";
        document.getElementById("contenu").appendChild(projectContainer);
    }
    
    // Vider le conteneur
    projectContainer.innerHTML = "";
    
    // Créer les cartes de projet
    projects.forEach((projectData, index) => {
        const categorie = new Categorie(projectData);
        const projectCard = categorie.genererCarteProjet();
        projectCard.style.animationDelay = (index * 0.1) + "s";
        
        // Ajouter l'événement de clic pour navigation
        projectCard.addEventListener("click", () => {
            const newPath = currentPath === "accueil" ? projectData.nom.toLowerCase() : currentPath + "/" + projectData.nom.toLowerCase();
            navigateToPage(newPath);
        });
        
        projectContainer.appendChild(projectCard);
    });
}

function updateHeaderCategories(currentPath) {
    // Charger la liste d'accueil pour l'en-tête
    fetch("pages/accueil/liste.json")
        .then(response => response.json())
        .then(data => {
            const categoriesContainer = document.getElementById("CategorieProjet");
            categoriesContainer.innerHTML = "";
            
            data.forEach(categoryData => {
                createHeaderCategory(categoryData, currentPath);
            });
        })
        .catch(error => {
            console.error("Erreur lors du chargement des catégories:", error);
        });
}

function createHeaderCategory(categoryData, currentPath) {
    const categoryElement = document.getElementById("CategorieProjet");
    const categoryName = categoryData.nom.toLowerCase();
     
    
    // Vérifier si cette catégorie a des sous-catégories
   const mainLink = document.createElement("a");
            mainLink.href = "#";
            mainLink.textContent = `${categoryData.icone} ${categoryData.nom}`;
            mainLink.title = categoryData.description;
            mainLink.style.borderColor = categoryData.couleur + '60';
            mainLink.className = currentPath.startsWith(categoryName) ? 'active' : '';
            
            // Événements de survol
            mainLink.addEventListener('mouseenter', () => {
                mainLink.style.backgroundColor = categoryData.couleur + '20';
                mainLink.style.borderColor = categoryData.couleur;
            });
            
            mainLink.addEventListener('mouseleave', () => {
                mainLink.style.backgroundColor = '';
                mainLink.style.borderColor = categoryData.couleur + '60';
            });
            
            // Événement de clic
            mainLink.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToPage(categoryName);
                console.log(categoryName);
            });
            
            categoryElement.appendChild(mainLink);
}

function navigateToPage(path) {
    // Mettre à jour l'URL
    path = path.replace("projet/","")
    const newUrl = "?page=" + path;
    window.history.pushState({page: path}, "", newUrl);
    
    // Charger la nouvelle page
    callPage(path);
}

// Gestion de l'historique du navigateur
window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page) {
        callPage(event.state.page);
    } else {
        callPage("accueil");
    }
});

// Chargement initial
const params = new URLSearchParams(window.location.search);
const page = params.get("page");

if (page) {
    callPage(page);
} else {
    callPage("accueil");
}
})