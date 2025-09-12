

       function loadAprop(){
            const aproposSection = document.getElementById("À-propos") ?? document.getElementById("About me");
        if (!loadedPage) return;
        const buttons = aproposSection.querySelectorAll('.header-btn');
        const tabPanes = aproposSection.querySelectorAll('.tab-pane');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                // Retirer la classe active de tous les boutons
                buttons.forEach(btn => btn.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                this.classList.add('active');
                // Masquer tous les onglets
                tabPanes.forEach(pane => pane.classList.remove('active'));
                // Afficher l'onglet correspondant
                const targetPane = document.getElementById(targetTab);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
        }
loadAprop();