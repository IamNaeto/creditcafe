// sign-up page validation script start
const form = document.querySelector('#signup-form');
const button = document.querySelector('#signup-btn');
const info = document.querySelector('.info');

function validatePassword(event) {
  event.preventDefault();
  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const email = document.querySelector('#email').value;
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#pswd').value;
  const cPassword = document.querySelector('#cpswd').value;

  let isError = false;

  switch (true) {
    case fname === "":
      info.textContent = 'First Name input field is empty';
      info.style.color = '#ff0000';
      document.querySelector('#fname').style.border = '2px solid #ff0000';
      isError = true;
      break;

    case lname === "":
      info.textContent = 'Last Name input field is empty';
      info.style.color = '#ff0000';
      document.querySelector('#lname').style.border = '2px solid #ff0000';
      isError = true;
      break;

    case email === "":
      info.textContent = 'Email input field is empty';
      info.style.color = '#ff0000';
      document.querySelector('#email').style.border = '2px solid #ff0000';
      isError = true;
      break;

    case username === "":
      info.textContent = 'Username input field is empty';
      info.style.color = '#ff0000';
      document.querySelector('#username').style.border = '2px solid #ff0000';
      isError = true;
      break;

    case password === "" || cPassword === "":
      info.textContent = 'Fill in both password fields';
      info.style.color = '#ff0000';
      document.querySelector('#pswd').style.border = '2px solid #ff0000';
      document.querySelector('#cpswd').style.border = '2px solid #ff0000';
      isError = true;
      break;

    case password !== cPassword:
      document.querySelector('#pswd').style.border = '1px solid #ff0000';
      document.querySelector('#cpswd').style.border = '1px solid #ff0000';
      info.textContent = 'Passwords do not match';
      info.style.color = '#ff0000';
      isError = true;
      break;

    case password === cPassword:
      document.querySelector('#pswd').style.border = '1px solid #008000';
      document.querySelector('#cpswd').style.border = '1px solid #008000';
      info.textContent = '';
      break;
  }

  if (isError) {
    return; // Prevent form submission if there are validation errors
  }

  // Retrieve the Existing user entries from local Storage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if the email address has not been used before
  let emailExists = users.some((user) => user.email === email);

  if (emailExists) {
    alert('Email address already exists. Please use a different email.');
  } else {
    let newUser = {
      firstname: fname,
      lastname: lname,
      email: email,
      username: username,
      password: password,
    };

    users.push(newUser);

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert('Your data has been successfully registered!');
    window.location.href = "sign-in.html";
  }
}

button.onclick = validatePassword;
