const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault(); //Prevent form from submitting
  checkUserName();
  checkEmail();
  checkPassword();
  checkPassword2();
});

// Functions 
function setError(input, message) {
  const formControl = input.parentElement;
  const para = formControl.querySelector('p');
  para.innerText = message;
};


function checkUserName() {
  if (username.value.length == '') {
    setError(username, `Username is Required`)
    username.style.border = "2px solid red";
  } else {
    username.style.border = "2px solid green";
    username.value;
  }
}

function checkEmail() {
  if (!email.value.includes('@')) {
    setError(email, `Email is Required`);
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid green";
    email.value;
  }
}

function checkPassword() {
  if (password.value.length < 6) {
    setError(password, `Password is too short`);
    password.style.border = "2px solid red";
  } else if (password.value.length > 20) {
    setError(password, `Password is too long`);
    password.style.border = "2px solid red";
  } else {
    password.style.border = "2px solid green";
    password.value;
  }
}

function checkPassword2() {
  if (password.value !== password2.value) {
    setError(password2, `Passwords do not match`);
    password2.style.border = "2px solid red";
  } else if (password2.value.length == '') {
    setError(password2, `Passwords do not match`);
    password2.style.border = "2px solid red";
  } else {
    password2.style.border = "2px solid green";
    password2.value;
  }
}