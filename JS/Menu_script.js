const btnMenu = document.getElementById('btn-menu-area');
const exitMenu = document.getElementById('modal-container');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('wrapper');
  const btnMenu = document.getElementById('btn-menu-area');

  nav.classList.toggle('active');
  btnMenu.classList.toggle('animation');
}

btnMenu.addEventListener('click', toggleMenu);

exitMenu.addEventListener('click', toggleMenu);




