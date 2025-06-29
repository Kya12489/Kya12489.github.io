

document.addEventListener('DOMContentLoaded', function() {
  
  // Éléments du DOM
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnLoading = document.getElementById('btnLoading');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');
  // Fonction pour valider l'email


  // Gestion de la soumission du formulaire
  form.addEventListener('submit', async function(e) {
    let valide = true;
    
    // Masquer les messages précédents
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Récupérer les données du formulaire
    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    // Validation côté client
    if (!email || !subject || !message) {
      errorMessage.textContent = '❌ Veuillez remplir tous les champs obligatoires.';
      showMessage(errorMessage);
       valide=false;
    }

    if (!isValidEmail(email)) {
      errorMessage.textContent = '❌ Veuillez saisir une adresse email valide.';
      showMessage(errorMessage);
       valide=false;
    }

    if (message.length < 10) {
      errorMessage.textContent = '❌ Le message doit contenir au moins 10 caractères.';
      showMessage(errorMessage);
      valide=false;
    }

    // Désactiver le bouton et afficher le loading
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';

    if(!valide){
        e.preventDefault();
    }
      // Réactiver le bouton
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
    
  });

  // Animation des champs au focus
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'translateY(0)';
    });
  });

  // Validation en temps réel de l'email
  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    if (email && !isValidEmail(email)) {
      this.style.borderColor = '#ef4444';
    } else {
      this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
  });

  // Compteur de caractères pour le message
  const messageTextarea = document.getElementById('message');
  const messageGroup = messageTextarea.parentElement;
  
  // Créer le compteur
  const counter = document.createElement('div');
  counter.style.cssText = 'text-align: right; font-size: 0.8rem; opacity: 0.6; margin-top: 5px;';
  messageGroup.appendChild(counter);
  
  function updateCounter() {
    const length = messageTextarea.value.length;
    counter.textContent = `${length} caractères`;
    if (length < 10) {
      counter.style.color = '#ef4444';
    } else {
      counter.style.color = '#4ade80';
    }
  }
  
  messageTextarea.addEventListener('input', updateCounter);
  updateCounter(); // Initialiser le compteur
});