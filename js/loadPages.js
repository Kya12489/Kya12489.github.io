function callPage(pageUrl) {
    fetch("pages/" + pageUrl + "/handler.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Page introuvable");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("contenu").innerHTML = data;
      })
      .catch(error => {
        document.getElementById("contenu").innerHTML = "<p>Erreur : " + error.message + "</p>";
      });
  }

  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page) {
    callPage(page); // ex: ?page=wordpress/pfc
  } else {
    callPage("acceuil"); // ex: pages/acceuil/handler.html
  }