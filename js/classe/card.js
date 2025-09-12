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
    htmlCard.innerHTML += `
      <p>Début : <i>${this.debut}</i> | Fin : <i>${this.fin}</i></p>
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
