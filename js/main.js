;

const navbar = document.querySelector('.navbar')
const hamburguer = document.querySelector('.navbar__hamburguer')

hamburguer.addEventListener('click', () => {
  navbar.classList.toggle('show')
})
