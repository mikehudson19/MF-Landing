const hamburger = document.querySelector('.navbar__hamburger');
const hamClose = document.querySelector('.close')

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'ham-nav';
  div.innerHTML = `
  <span class="ham-nav__close">+</span>
    <div class="ham-nav__content">
      <ul class="ham-nav__list">
        <li class="ham-nav__item">Home</li>
        <li class="ham-nav__item">About</li>
        <li class="ham-nav__item">Contact</li>
      </ul>
    </div>
  `
  document.body.appendChild(div);
  hamburger.style.display = 'none';
})

document.addEventListener('click', (e) => {
  const div = document.querySelector('.ham-nav');
  if (e.target.className == 'ham-nav__close') {
    div.remove();
    hamburger.style.display = 'block';
  } 
})


// GOOGLE MAPS API

var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.contact__card--map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 5
  });
}