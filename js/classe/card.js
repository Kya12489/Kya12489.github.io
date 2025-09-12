class Card {
  constructor(data) {
    this.title = data["title"];   // corrigé ici
    this.debut = data["debut"];
    this.fin = data["fin"];
    this.content = data["content"];
    this.tags = data["tags"];
    this.more = data["more"];
    this.view = data["view"];
  }

  
  parseDateFlexible(dateStr) {
    const parts = dateStr.split('-').map(Number);
    if (parts[0] >= 2000){
       
      return Date.parse(dateStr)
    }
    else if (parts.length === 3) { // DD/MM/YYYY
        const [day, month, year] = parts;
        return new Date(year, month - 1, day);
    } else if (parts.length === 2) { // MM/YYYY
        const [month, year] = parts;
        return new Date(year, month - 1, 1); // On prend le premier jour du mois
    } else if (parts.length === 1) { // YYYY seul
        const [year] = parts;
        return new Date(year, 0, 1); // 1er janvier de l'année
    } else {
        return null; // Format invalide
    }
  }

  generateCardHeader() {
    const htmlCard = document.createElement('div');
    htmlCard.className = 'card elargir'; // ajout d'une classe "card"
    htmlCard.id = this.title;

    htmlCard.innerHTML = `<h3>${this.title}</h3>`;
    return htmlCard;
  }

  generateViewBtn(htmlCard){
    let newBtn = document.createElement("a");
    newBtn.className = "btn space centerH";
    newBtn.textContent = this.view["title"];
    newBtn.href = this.view["src"];
    
    htmlCard.appendChild(newBtn);
  }

  generateMoreBtn(htmlCard){
    let newBtn = document.createElement("a");
    newBtn.className = "btn space centerH";
    newBtn.textContent = "Voir plus";
    newBtn.href = this.more;
    
    htmlCard.appendChild(newBtn);
  }

  generateCardDate(htmlCard) {
    let fin = this.fin
    if (this.parseDateFlexible(fin) && this.parseDateFlexible(fin)>Date.now()){

      fin = `<i>${fin}</i>`
    }
    htmlCard.innerHTML += `
      <p>Début : ${this.debut} | Fin : ${fin}</p>
    `;
  }

  generateTags(htmlCard){
    let newDiv = document.createElement("div");
    newDiv.className = "tags conteneur row lrgap centerH";
    this.tags.forEach(element => {
      newDiv.innerHTML += `<p class="${element.toLowerCase()}">${element}</p>`
    });

    htmlCard.appendChild(newDiv);
  }

  generateCard() {
    let htmlCard = this.generateCardHeader();
    if (this.debut ) {
      this.generateCardDate(htmlCard);
    }
    
    if (this.content ) {
      htmlCard.innerHTML += `<p>${this.content}</p>`;
    }
    if (this.more){
      this.generateMoreBtn(htmlCard);
    }
    if(this.view){
      this.generateViewBtn(htmlCard);
    }
    if(this.tags){
      this.generateTags(htmlCard);
    }
    return htmlCard;
  }
}
