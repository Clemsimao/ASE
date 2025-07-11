import '../style/scss/reset.scss'
import '../style/scss/header.scss'
import '../style/scss/main.scss'
import '../style/scss/grid/particulier.scss'

// changement de photos sur un clique 
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les blocs cliquables avec data-img
  const items = document.querySelectorAll('.items-body-content[data-img]');
  const mainPhoto = document.getElementById('main-photo');

  // Fonction pour mettre à jour la surbrillance selon l'image affichée
  function updateHighlight(imgName) {
    items.forEach(item => {
      if (item.getAttribute('data-img') === imgName) {
        item.classList.add('highlight');
      } else {
        item.classList.remove('highlight');
      }
    });
  }

  // Initialisation : surbrillance sur l'élément correspondant à l'image affichée
  if (mainPhoto) {
    // Récupère juste le nom du fichier (sans le chemin)
    const currentImg = mainPhoto.src.split('/').pop();
    updateHighlight(currentImg);
  }

  // Ajout du curseur pointer sur les blocs cliquables
  items.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img');
      if (imgSrc && mainPhoto) {
        mainPhoto.src = './public/images/exemples/' + imgSrc;
        updateHighlight(imgSrc);
      }
    });
  });
});