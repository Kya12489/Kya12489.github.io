class Categorie{
    constructor(nom){
        this.nom = nom;
    }
    genererHeaderHTML() {
    const parent = document.getElementById("CategorieProjet"); // vérifie que c'est le bon id
    if (!parent) {
      console.error("Element parent introuvable");
      return;
    }

    // Création d'un lien <a>
    const lien = document.createElement("a");
    lien.href = `?nom=${encodeURIComponent(this.nom)}`; // encode pour sécurité
    lien.textContent = this.nom;
    
    // Ajout au parent
    parent.appendChild(lien);
  }
    
}