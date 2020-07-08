const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'ham-container';
  div.innerHTML = `
  
  <span>+</span>
    <div class="ham-content">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  `
  document.body.appendChild(div);
})
