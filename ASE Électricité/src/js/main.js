import '../style/scss/reset.scss'
import '../style/scss/header.scss'
import '../style/scss/main.scss'
import '../style/scss/grid/card.scss'
import '../style/scss/grid/pictures.scss'
import '../style/scss/footer.scss'

/* changement de photos sur un clique div 1
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
});*/

// changement de photos sur un clique div 3 vers div 4
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les blocs cliquables avec data-img-div4 dans la div3
  const div3Items = document.querySelectorAll('.div3 .items-body-content[data-img-div4]');
  const div4Photo = document.getElementById('main-photo');

  // Fonction pour mettre à jour la surbrillance selon l'image affichée
  function updateDiv3Highlight(imgName) {
    div3Items.forEach(item => {
      if (item.getAttribute('data-img-div4') === imgName) {
        item.classList.add('highlight');
      } else {
        item.classList.remove('highlight');
      }
    });
  }

  // Initialisation : surbrillance sur l'élément correspondant à l'image affichée dans div4
  if (div4Photo) {
    // Récupère juste le nom du fichier (sans le chemin)
    const currentImg = div4Photo.src.split('/').pop();
    updateDiv3Highlight(currentImg);
  }

  // Ajout du curseur pointer sur les blocs cliquables
  div3Items.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img-div4');
      if (imgSrc && div4Photo) {
        div4Photo.src = './public/images/exemples/' + imgSrc;
        updateDiv3Highlight(imgSrc);
      }
    });
  });
});

// changement de photos sur un clique div 1 vers div 2
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les blocs cliquables avec data-img-div2 dans la div1
  const div1Items = document.querySelectorAll('.div1 .items-body-content[data-img-div2]');
  const div2Photo = document.getElementById('div2-photo');

  // Fonction pour mettre à jour la surbrillance selon l'image affichée
  function updateDiv1Highlight(imgName) {
    div1Items.forEach(item => {
      if (item.getAttribute('data-img-div2') === imgName) {
        item.classList.add('highlight');
      } else {
        item.classList.remove('highlight');
      }
    });
  }

  // Initialisation : surbrillance sur l'élément correspondant à l'image affichée dans div2
  if (div2Photo) {
    // Récupère juste le nom du fichier (sans le chemin)
    const currentImg = div2Photo.src.split('/').pop();
    updateDiv1Highlight(currentImg);
  }

  // Ajout du curseur pointer sur les blocs cliquables
  div1Items.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img-div2');
      if (imgSrc && div2Photo) {
        div2Photo.src = './public/images/exemples/' + imgSrc;
        updateDiv1Highlight(imgSrc);
      }
    });
  });
});

// changement de photos sur un clique div 5 vers div 6
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les blocs cliquables avec data-img-div6 dans la div5
  const div5Items = document.querySelectorAll('.div5 .items-body-content[data-img-div6]');
  const div6Photo = document.getElementById('div6-photo');

  // Fonction pour mettre à jour la surbrillance selon l'image affichée
  function updateDiv5Highlight(imgName) {
    div5Items.forEach(item => {
      if (item.getAttribute('data-img-div6') === imgName) {
        item.classList.add('highlight');
      } else {
        item.classList.remove('highlight');
      }
    });
  }

  // Initialisation : surbrillance sur l'élément correspondant à l'image affichée dans div6
  if (div6Photo) {
    // Récupère juste le nom du fichier (sans le chemin)
    const currentImg = div6Photo.src.split('/').pop();
    updateDiv5Highlight(currentImg);
  }

  // Ajout du curseur pointer sur les blocs cliquables
  div5Items.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img-div6');
      if (imgSrc && div6Photo) {
        div6Photo.src = './public/images/exemples/' + imgSrc;
        updateDiv5Highlight(imgSrc);
      }
    });
  });
});

// changement de photos sur un clique div 7 vers div 8
document.addEventListener('DOMContentLoaded', () => {
  // Sélectionne tous les blocs cliquables avec data-img-div8 dans la div7
  const div7Items = document.querySelectorAll('.div7 .items-body-content[data-img-div8]');
  const div8Photo = document.getElementById('div8-photo');

  // Fonction pour mettre à jour la surbrillance selon l'image affichée
  function updateDiv7Highlight(imgName) {
    div7Items.forEach(item => {
      if (item.getAttribute('data-img-div8') === imgName) {
        item.classList.add('highlight');
      } else {
        item.classList.remove('highlight');
      }
    });
  }

  // Initialisation : surbrillance sur l'élément correspondant à l'image affichée dans div8
  if (div8Photo) {
    // Récupère juste le nom du fichier (sans le chemin)
    const currentImg = div8Photo.src.split('/').pop();
    updateDiv7Highlight(currentImg);
  }

  // Ajout du curseur pointer sur les blocs cliquables
  div7Items.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img-div8');
      if (imgSrc && div8Photo) {
        div8Photo.src = './public/images/exemples/' + imgSrc;
        updateDiv7Highlight(imgSrc);
      }
    });
  });
});

/* changement de photos sur un clique div 5
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
}); */

/* changement de photos sur un clique div 7
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
}); */