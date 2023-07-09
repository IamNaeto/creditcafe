const info = document.querySelector(".info");
const signInBtn = document.querySelector("#signInBtn");

signInBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Get input from the user
  const userUsername = document.querySelector("#username").value;
  const userPassword = document.querySelector("#pswd").value;

  // Get inputs from storage
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (userUsername === username && userPassword === password) {
    localStorage.setItem('userLoggedIn', true);
    window.location.href = "card-gen.html";
  }else if(userUsername === "" || userPassword === ""){
    info.textContent = 'Please fill in your login details';
    info.style.color = '#ff0000';
  } else {
    info.textContent = 'User does not exist. Please sign up instead.';
    info.style.color = '#ff0000';
    setTimeout(() => {
      window.location.href = "sign-up.html";
    }, 3000);
  }
});
