fetch('element/listCat.json')
  .then(res => res.json())
  .then(dossiers => {
    dossiers.forEach(nomDossier => {
      const cat = new Categorie(nomDossier);
      cat.genererHeaderHTML();
    });
  });