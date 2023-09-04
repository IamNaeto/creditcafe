const info = document.querySelector(".info");
const signInBtn = document.querySelector("#signInBtn");

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Get input from the user
  const userUsername = document.querySelector("#username").value;
  const userPassword = document.querySelector("#pswd").value;

  // Retrieve user data from local storage
let users = JSON.parse(localStorage.getItem('users'));

// Check if any user DATA Exist
if (users && users.length > 0) {
  // Function to find a user by username and password
  function findUser(username, password) {
    return users.find((user) => {
      return user.username === username && user.password === password;
    });
  }

  // Check if username and password are provided
  if (userUsername === "" || userPassword === "") {
    info.textContent = 'Please fill in your login details';
    info.style.color = '#ff0000';
  } else {
    // Check if username and password match any user
    let foundUser = findUser(userUsername, userPassword);
    if (foundUser) {
      // Set the userLoggedIn flag to true in the user data
      foundUser.userLoggedIn = true;

      // Save the updated user data back to local storage
      localStorage.setItem('users', JSON.stringify(users));

      // Store the username in session storage
      sessionStorage.setItem('loggedInUser', foundUser.username);

      // Successful login
      sessionStorage.setItem('userData', JSON.stringify(foundUser));
      alert("Your login was successful");
      window.location.href = "card-gen.html";
    } else {
      // Username and password provided but they do not match any user
      alert("The login details you supplied are Incorrect!");
    }
  }
} else if (userUsername === "" || userPassword === "") {
  info.textContent = 'Please fill in your login details';
  info.style.color = '#ff0000';
} else {
  alert("No user information was found! Please sign up");
  window.location.href = "sign-in.html";
}


});