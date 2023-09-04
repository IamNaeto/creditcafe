function navBarChange(){
    // Side bar navigations
const dashboard = document.querySelector('.dashboard-container')
const profile = document.querySelector('.profile-container')
const downloadedCards = document.querySelector('.download-wrapper')
const savedCards = document.querySelector('.saved-wrapper')

const dashboardNav = document.querySelector('#dashboardNav')
dashboardNav.addEventListener('click', () => {
    dashboard.style.display = 'block'
    dashboardNav.style.backgroundColor = '#F3691B'
    dashboardNav.style.color = '#FFFFFF'
    profile.style.display = 'none'
    profileNav.style.backgroundColor = '#FFFFFF'
    profileNav.style.color = '#000000'
    downloadedCards.style.display = 'none'
    downloadedCardsNav.style.backgroundColor = '#FFFFFF'
    downloadedCardsNav.style.color = '#000000'
})

const profileNav = document.querySelector('#profileNav')
profileNav.addEventListener('click', () => {
    dashboard.style.display = 'none'
    dashboardNav.style.backgroundColor = '#FFFFFF'
    dashboardNav.style.color = '#000000'
    profile.style.display = 'block'
    profileNav.style.backgroundColor = '#F3691B'
    profileNav.style.color = '#FFFFFF'
    downloadedCards.style.display = 'none'
    downloadedCardsNav.style.backgroundColor = '#FFFFFF'
    downloadedCardsNav.style.color = '#000000'
})

const downloadedCardsNav = document.querySelector("#downloadNav")
downloadedCardsNav.addEventListener('click', () => {
    dashboard.style.display = 'none'
    dashboardNav.style.backgroundColor = '#FFFFFF'
    dashboardNav.style.color = '#000000'
    profile.style.display = 'none'
    profileNav.style.backgroundColor = '#FFFFFF'
    profileNav.style.color = '#000000'
    downloadedCards.style.display = 'block'
    downloadedCardsNav.style.backgroundColor = '#F3691B'
    downloadedCardsNav.style.color = '#FFFFFF'
})
}
// Calling of the function so that anything the sidebar is clicked on, it will change
navBarChange()


// Updating last seen
const lastSeenElement = document.getElementById('lastSeen');

function updateLastSeen() {
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  const formattedTime = currentDate.toLocaleTimeString();

  lastSeenElement.textContent = `${formattedDate} at ${formattedTime}`;
}

updateLastSeen();

setInterval(updateLastSeen, 60000);


/****** Tried to increase download and saved card count but didnt work, would get back to it.
******/
  // Increasing download and saved card counts on dashboard
    const countElement = document.getElementById('loadCount');
    const countElement2 = document.getElementById('savedCount');

    // Initialize the count variable
    let count = 0;

    // Function to update the count element
    function updateCount() {
      countElement.innerHTML = count;
      countElement2.innerHTML = count;
    }

    // Function to increase the count
    function increaseCount() {
      count++; // Increase the count
      updateCount(); // Update the count element
    }

// Update dynamicness on the dashboard pages
// Retrieve user data from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Retrieve username of the currently logged-in user from session storage
const loggedInUsername = sessionStorage.getItem('loggedInUser');

// Function to find the currently logged-in user
function findLoggedInUser(username) {
  return users.find((user) => user.username === username);
}

// Check if any user DATA Exist
if (loggedInUsername) {
  // Find the currently logged-in user
  let loggedInUser = findLoggedInUser(loggedInUsername);

  if (loggedInUser) {
    if (loggedInUser.userLoggedIn === true) {
      // Update user details on the profile form
      const usersFName = document.querySelector('.fName');
      const usersUsername = document.querySelector('.userFN');
      const usersUsername2 = document.querySelector('.userFN2');
      const usersUsername3 = document.querySelector('.userFN3');
      const usersLName = document.querySelector('.lName');
      const usersUName = document.querySelector('.userN');
      const usersMail = document.querySelector('.userMail');
      const usersM = document.querySelector('.userM');
      const usersFullName = document.querySelector('.userFullN');
      const usersFullName2 = document.querySelector('.userFullN2');


      usersFName.value = loggedInUser.firstname;
      usersLName.value = loggedInUser.lastname;
      usersUName.value = loggedInUser.username;
      usersMail.value = loggedInUser.email;
      usersM.textContent = loggedInUser.email;
      usersUsername.innerHTML = loggedInUser.username;
      usersUsername2.innerHTML = loggedInUser.username;
      usersUsername3.innerHTML = loggedInUser.username;
      usersFullName.textContent = loggedInUser.firstname + " " + loggedInUser.lastname;
      usersFullName2.textContent = loggedInUser.firstname + " " + loggedInUser.lastname;
    }
  }
}


// Users Detials Edit and Submit I will still come back to this!!!
const editBtn = document.querySelector('.edit');
const saveBtn = document.querySelector('.save');
editBtn.addEventListener('click', (event) => {
  event.preventDefault();
  usersFName.removeAttribute("readonly");
  usersFName.focus();
  usersLName.removeAttribute("readonly");
  usersUName.removeAttribute("readonly");
  usersMail.removeAttribute("readonly");
  saveBtn.removeAttribute("disabled");
});

saveBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // Get the updated values from the input fields
  const updatedFName = usersFName.value;
  const updatedLName = usersLName.value;
  const updatedUName = usersUName.value;
  const updatedMail = usersMail.value;
  // Set the input field values to the updated values
  usersFName.value = updatedFName;
  usersLName.value = updatedLName;
  usersUName.value = updatedUName;
  usersMail.value = updatedMail;

  // Disable the input fields
  usersFName.setAttribute("readonly", "readonly");
  usersLName.setAttribute("readonly", "readonly");
  usersUName.setAttribute("readonly", "readonly");
  usersMail.setAttribute("readonly", "readonly");
  usersForm.submit();
  saveBtn.setAttribute("disabled", "disabled");
  window.location.href="dashboard.html";
});
