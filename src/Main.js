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
  if (input.value.length < min) {
    showError(
      input,
      `${formatFeildName(input)} must be at least ${min} charecters `
    );
    return false;
  } else if (input.value.length > max) {
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

function checkEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value.trim())) {
    showSuccess(email);
    return true;
  } else {
    showError(email, "Email is not true");
    return false;
  }
}

function checkPasswordsMatches(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "password do not match");
    return false;
  } else {
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
  let isUserNameValid, isEmailValid, isPasswordValid, isPasswordsValid;
  if (isRequiredValid) {
    isUserNameValid = checkLength(username, 3, 15);

    isEmailValid = checkEmail(email);
    isPasswordValid = checkLength(password, 6, 25);
    isPasswordsValid = checkPasswordsMatches(password, confirmPassword);

    isFormValid =
      isUserNameValid && isEmailValid && isPasswordValid && isPasswordsValid;
    if (isFormValid) {
      alert("registration successful");
      console.log("registration successful");
      form.reset();
      document
        .querySelectorAll(".form-group")
        .forEach((element) => (element.className = "form-group"));
    }
  }
});
