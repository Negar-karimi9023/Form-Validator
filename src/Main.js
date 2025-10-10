const form = document.querySelector("#registration-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innterText = message;
}

function formatFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequried(inputArray) {
  let isValid = true;
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${formatFeildName(input)} is required`);
      isValid = !isValid;
    } else {
      showSuccess(input);
    }
  });
  return isValid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isRequiredValid = checkRequried([
    username,
    email,
    password,
    confirmPassword,
  ]);
});
