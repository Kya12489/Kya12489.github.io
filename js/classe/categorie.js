class Categorie {
  constructor(categorie) {
    this.title = categorie["title"];
    this.button = categorie["Button"] // majuscule comme dans data.js
    this.cards = categorie["Cards"]   // majuscule comme dans data.js
    this.script = categorie["script"] 
    this.content = categorie["content"]
    this.special = categorie["special"] ?? ""
  }

  generateShortHeader(){
    const header = document.getElementById("sectionHeader");
    let btn = document.createElement("a");
    btn.className = 'header-btn';
    btn.href = "#"+this.title+"Ref";
    btn.textContent = this.title;

    header.appendChild(btn);
  }

  genererCategorieContent(section){
    section.innerHTML += this.content;  
  }

  genererCategorieTitle() {
    const section = document.createElement('section');
    section.className = 'conteneur column lrgap';
    section.id = `${this.title}`;

    const h1 = document.createElement("h1");
   h1.id = `${this.title}Ref`;
    h1.textContent = this.title;

    section.appendChild(h1);
    return section;
  }

  generateButtonContent(button,active){
    const buttonDiv = document.createElement("div");
    buttonDiv.id = button["title"];
    buttonDiv.className = `tab-pane ${active}`
    buttonDiv.innerHTML = button["content"];

    return buttonDiv
  }

  generateCategorieHeader(section) {
    const headerDiv = document.createElement("div");
    headerDiv.id = "section-header";
    headerDiv.className = "conteneur row lrgap";
    section.appendChild(headerDiv);
    let forFirst = "active";
    this.button.forEach(element => {
      const btn = document.createElement("button");
      btn.className = `header-btn elargir ${forFirst}`;
      btn.dataset.tab = element.title;
      btn.textContent = element.title;
      
      headerDiv.appendChild(btn);
      
      
      section.appendChild(this.generateButtonContent(element,forFirst));
      forFirst = "";
    });
    
    
  }
  
  generateCategorieCard(section) {
    const grid = document.createElement("div");
    grid.className = "projects-grid";
    

    this.cards.forEach(element => {
      let newCard = new Card(element);
      grid.appendChild(newCard.generateCard());
    });

    section.appendChild(grid);
  }
  addScript(section){
    const script = document.createElement("script");
    script.src = this.script;
    section.appendChild(script);
  }

  generateSpecial(){
    let section = document.createElement("div");
    section.innerHTML = this.content

    
    return section;
  }

  genererCategorie() {
    let section
    
    if (this.special){
      if(this.special!=="hide"){
        section = this.generateSpecial();
      }
    }else{
      section = this.genererCategorieTitle();

      if (this.button) {
        this.generateCategorieHeader(section);
      }

      if (this.cards) {
        this.generateCategorieCard(section);
      }
      if(this.script) {
        this.addScript(section);
      }
      if(this.content){
        this.genererCategorieContent(section);
      }
      this.generateShortHeader();
    }
    

    
    return section;
  }
}
