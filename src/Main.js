const form = document.querySelector("#registration-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group sucess";
}

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}

function formatFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequried(inputArray) {
  let isValid = true;
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${formatFeildName(input)} is required`);
      isValid = false;
    } else {
      showSuccess(input);
    }
  });
  return isValid;
}

function checkLength(input, min, max) {
  if (input.value < min) {
    showError(
      input,
      `${formatFeildName(input)} must be at least ${min} charecters `
    );
    return false;
  } else if (input.value > max) {
    showError(
      input,
      `${formatFeildName(input)} must be less than ${max} charecters `
    );
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isRequiredValid = checkRequried([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isFormValid = isRequiredValid;
  if (isRequiredValid) {
    const isUserNameValid = checkLength(username, 3, 15);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkLength(password, 6, 25);
    const isPasswordsValid = checkPasswordsMatches(password, confirmPassword);
  }
});
