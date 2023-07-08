// sign-up page validation script start
const form = document.querySelector('#signup-form');
const button = document.querySelector('#signup-btn');
const info = document.querySelector('.info');

function validatePassword(event) {
  event.preventDefault();
  const password = document.querySelector('#pswd');
  const cPassword = document.querySelector('#cpswd');
  const fname = document.querySelector('#fname');
  const lname = document.querySelector('#lname');
  const email = document.querySelector('#email');
  const username = document.querySelector('#username');

  let isError = false;

  switch (true) {
    case fname.value === "" :
      info.textContent = 'First Name input field is empty';
      info.style.color = '#ff0000';
      fname.style.border = '2px solid #ff0000'
      isError = true;
      break;

    case lname.value === "" :
      info.textContent = 'Last Name input field is empty';
      info.style.color = '#ff0000';
      fname.style.border = '2px solid #ff0000'
      isError = true;
      break;

    case email.value === "" :
      info.textContent = 'Email input field is empty';
      info.style.color = '#ff0000';
      email.style.border = '2px solid #ff0000'
      isError = true;
      break;
      
    case username.value === "":
      info.textContent = 'Username input field is empty';
      info.style.color = '#ff0000';
      username.style.border = '2px solid #ff0000'
      isError = true;
      break;

    case password.value === "" || cPassword.value === "":
      info.textContent = 'Fill in both password fields';
      info.style.color = '#ff0000';
      password.style.border = '2px solid #ff0000'
      cPassword.style.border = '2px solid #ff0000'
      isError = true;
      break;

    case password.value !== cPassword.value:
      password.style.border = '1px solid #ff0000';
      cPassword.style.border = '1px solid #ff0000';
      info.textContent = 'Passwords do not match';
      info.style.color = '#ff0000';
      isError = true;
      break;

    case password.value === cPassword.value:
      password.style.border = '1px solid #008000';
      cPassword.style.border = '1px solid #008000';
      info.textContent = '';
      break;
  }

  if (isError) {
    return; // Prevent form submission if there are validation errors
  }

   // Capture the form inputs and store the data in local storage
   if (localStorage.getItem("email") && localStorage.getItem("password")) {
    info.textContent = 'User already exists. Please login instead.';
    info.style.color = '#ff0000';
    setTimeout(()=>{
    window.location.href = "sign-in.html";
    }, 3000)  
  } else {
    localStorage.setItem("firstname", fname.value);
    localStorage.setItem("lastname", lname.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    window.location.href = "sign-in.html";
  }
}

button.onclick = validatePassword;

// sign-up page validation script stop
