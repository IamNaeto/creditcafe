// Hamburger script start
const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.nav-links')
hamMenu.addEventListener('click', () =>{
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active')
})
// Hamburger script end

 // Defining logout
 const logOutBtn = document.getElementById('signIn');
 logOutBtn.addEventListener("click", () => {
   localStorage.setItem('userLoggedIn', false);
 });
 
// Check if user is logged in other to add dynamicness to the nav links
const regBtn = document.getElementById('register-link')
const signOutBtn = document.getElementById('signIn')
const heroBtn = document.getElementById('herobtn')

if (localStorage.getItem('userLoggedIn') === "true") {
	regBtn.innerHTML = 'Dashboard';
	regBtn.href = 'html/dashboard.html';
	signOutBtn.innerHTML = 'Sign Out';
	heroBtn.href = 'html/card-gen.html';
  }else{
	regBtn.innerHTML = 'Register'
	regBtn.href = 'html/sign-up.html';
	signOutBtn.innerHTML = 'Sign In';
	heroBtn.href = 'html/sign-in.html';
  }
  