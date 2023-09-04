// Hamburger script start
const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.nav-links')
hamMenu.addEventListener('click', () =>{
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active')
})
// Hamburger script end

 
// Check if user is logged in to add dynamicness to the nav links
const regBtn = document.getElementById('register-link');
const signOutBtn = document.getElementById('signIn');
const heroBtn = document.getElementById('herobtn');

// Retrieve user data from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Retrieve the username of the currently logged-in user from session storage
let loggedInUsername = sessionStorage.getItem('loggedInUser');

// Function to find the currently logged-in user
function findLoggedInUser(username) {
  return users.find((user) => user.username === username);
}

// Check if any user DATA Exist
if (loggedInUsername) {
  // Find the currently logged-in user
  let loggedInUser = findLoggedInUser(loggedInUsername);

  if (loggedInUser) {
    // Check the userLoggedIn flag for the currently logged-in user
    if (loggedInUser.userLoggedIn === true) {
      if (window.location.pathname === '/index.html') {
        regBtn.innerHTML = 'Dashboard';
        regBtn.href = 'html/dashboard.html';
        signOutBtn.innerHTML = 'Sign Out';
        heroBtn.href = 'html/card-gen.html';
      } else {
		if (window.location.pathname === '/index.html'){
		regBtn.innerHTML = 'Dashboard';
        regBtn.href = 'dashboard.html';
        signOutBtn.innerHTML = 'Sign Out';
        heroBtn.href = 'card-gen.html';
		}else{
		regBtn.innerHTML = 'Dashboard';
        regBtn.href = 'dashboard.html';
        signOutBtn.innerHTML = 'Sign Out';
		}
        
      }
    } else {
      if (window.location.pathname === '/index.html') {
        regBtn.innerHTML = 'Register';
        regBtn.href = 'html/sign-up.html';
        signOutBtn.innerHTML = 'Sign In';
        heroBtn.href = 'html/sign-in.html';
      } else {
        regBtn.innerHTML = 'Register';
        regBtn.href = 'sign-up.html';
        signOutBtn.innerHTML = 'Sign In';
        heroBtn.href = 'sign-in.html';
      }
    }
  }
}

// Defining logout
const logOutBtn = document.getElementById('signIn');
logOutBtn.addEventListener("click", () => {
  // Set the userLoggedIn flag to false for the currently logged-in user
  let loggedInUser = findLoggedInUser(loggedInUsername);

  if (loggedInUser) {
    loggedInUser.userLoggedIn = false;
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Clear the session storage
  sessionStorage.clear();

  // Redirect to sign-in page
  window.location.href = "sign-in.html";
});


