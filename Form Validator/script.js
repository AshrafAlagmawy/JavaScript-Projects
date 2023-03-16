'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('c-password');

// When Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerHTML = message;
}

// When Success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email
const checkEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, 'Email is invalid !');
  }
};

// Getting the id of a input field
const getFieldName = (input) => {
  // One of the ways to make first character uppercase
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required !`);
    } else {
      showSuccess(input);
    }
  });
}

// Check the length of a input
function checkLength(input, min, max) {
  const size = input.value.length;
  if (size < min) {
    showError(input, `${getFieldName(input)} must be at least ${min}`);
  } else if (size > max) {
    showError(input, `${getFieldName(input)} must be smaller than ${max}`);
  } else {
    showSuccess(input);
  }
}

// Check similarity of password and confirmed password
function checkSimilarity(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords don't match ");
  }
}

// Event Listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, , confirmPassword]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkSimilarity(password, confirmPassword);
});
