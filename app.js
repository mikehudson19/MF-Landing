const hamburger = document.querySelector('.hamburger');
const hamClose = document.querySelector('.close')

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'ham-container';
  div.innerHTML = `
  <span class="close">+</span>
    <div class="ham-content">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  `
  document.body.appendChild(div);
  hamburger.style.display = 'none';
})

document.addEventListener('click', (e) => {
  const div = document.querySelector('.ham-container');
  if (e.target.className == 'close') {
    div.remove();
    hamburger.style.display = 'block';
  } 
})
