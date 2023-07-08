// Hamburger script start
const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.nav-links')
hamMenu.addEventListener('click', () =>{
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active')
})
// Hamburger script end