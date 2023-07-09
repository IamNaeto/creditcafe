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
const FN = localStorage.getItem("firstname")
const LN = localStorage.getItem("lastname")
const UN = localStorage.getItem("username")
const mail = localStorage.getItem("email")
const fullN = FN + " " + LN

const userFN = document.querySelector(".userFN")
userFN.innerHTML = FN

const userFullN = document.querySelector(".userFullN")
userFullN.innerHTML = fullN

const userFN2 = document.querySelector(".userFN2")
userFN2.innerHTML = FN

const userFullN2 = document.querySelector(".userFullN2")
userFullN2.innerHTML = fullN

const userM = document.querySelector(".userM")
userM.innerHTML = mail

const userFN3 = document.querySelector(".userFN3")
userFN3.innerHTML = FN

// Update users detials on the profile form
const usersForm = document.querySelector('#usersDetails');
const usersFName = document.querySelector('.fName');
const usersLName = document.querySelector('.lName');
const usersUName = document.querySelector('.userN');
const usersMail = document.querySelector('.userMail');
const editBtn = document.querySelector('.edit');
const saveBtn = document.querySelector('.save');

usersFName.value = FN
usersLName.value = LN
usersUName.value = UN
usersMail.value = mail

// Users Detials Edit and Submit 
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
