import '../style/scss/reset.scss'
import '../style/scss/header.scss'
import '../style/scss/main.scss'
import '../style/scss/grid/particulier.scss'

// changement de photos sur un clique 
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.items-body-content span[data-img]').forEach(span => {
    span.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img');
      if (imgSrc) {
        document.getElementById('main-photo').src = './public/images/exemples/' + imgSrc;
      }
    });
  });
});