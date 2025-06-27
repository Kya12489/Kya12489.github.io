class Categorie {
  constructor(data) {
    // Support pour l'ancien format (string) et le nouveau format (objet)
    if (typeof data === 'string') {
      this.nom = data;
      this.titre = data.charAt(0).toUpperCase() + data.slice(1);
      this.description = '';
      this.couleur = '#60a5fa';
      this.icone = '📁';
    } else {
      this.nom = data.nom;
      this.titre = data.titre || data.nom;
      this.description = data.description || '';
      this.couleur = data.couleur || '#60a5fa';
      this.icone = data.icone || '📁';
    }
  }

  // Méthode pour générer une carte de projet
  genererCarteProjet() {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
      <div class="project-header">
        <span class="project-icon" style="font-size: 2rem;">${this.icone}</span>
        
      </div>
      <h3 style="color: ${this.couleur}">${this.nom}</h3>
      <p>${this.description}</p>
      <div class="project-link" style="border-color: ${this.couleur}; color: ${this.couleur}">
        Voir les projets →
      </div>
    `;
    
    // Effet de survol pour la carte
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = this.couleur + '80';
      card.style.boxShadow = `0 20px 40px ${this.couleur}40`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    });
    
    return card;
  }

  // Méthode pour générer un élément de header (pas utilisée dans le nouveau système)
  genererHeaderHTML() {
    const parent = document.getElementById("CategorieProjet");
    if (!parent) {
      console.error("Element parent introuvable");
      return;
    }

    // Création du lien avec style personnalisé
    const lien = document.createElement("a");
    lien.href = `?page=projet/${this.nom.toLowerCase()}`;
    lien.textContent = `${this.icone} ${this.titre}`;
    lien.title = this.description;
    
    // Application de la couleur personnalisée
    lien.style.borderColor = this.couleur + '60';
    
    // Effet de survol personnalisé
    lien.addEventListener('mouseenter', () => {
      lien.style.backgroundColor = this.couleur + '20';
      lien.style.borderColor = this.couleur;
    });
    
    lien.addEventListener('mouseleave', () => {
      lien.style.backgroundColor = '';
      lien.style.borderColor = this.couleur + '60';
    });

    parent.appendChild(lien);
  }

  // Méthode statique pour créer une catégorie depuis JSON
  static fromJSON(data) {
    return new Categorie(data);
  }

  // Méthode pour convertir en JSON
  toJSON() {
    return {
      nom: this.nom,
      titre: this.titre,
      description: this.description,
      couleur: this.couleur,
      icone: this.icone
    };
  }
}