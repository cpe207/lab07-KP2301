const FirstnameInput = document.querySelector("#first-name-input");
const LastnameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const RegisterBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
};

FirstnameInput.onkeyup=()=>{
  FirstnameInput.classList.remove("is-invalid");
  FirstnameInput.classList.remove("is-valid");
};

LastnameInput.onkeyup=()=>{
  LastnameInput.classList.remove("is-invalid");
  LastnameInput.classList.remove("is-valid");
};

EmailInput.onkeyup=()=>{
  EmailInput.classList.remove("is-invalid");
  EmailInput.classList.remove("is-valid");
};

PasswordInput.onkeyup=()=>{
  PasswordInput.classList.remove("is-invalid");
  PasswordInput.classList.remove("is-valid");
};

RegisterBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isemailok = false;
  let ispasswordOk = false;

  if (FirstnameInput.value === "") {
    FirstnameInput.classList.add("is-invalid");
  }else{
    FirstnameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (LastnameInput.value === "") {
    LastnameInput.classList.add("is-invalid");
  }else{
    LastnameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if(validateEmail(EmailInput.value) && EmailInput.value !== ""){
    EmailInput.classList.add("is-valid");
    isemailok = true;
  }else {
    EmailInput.classList.add("is-invalid");
  }

  if(PasswordInput.value.length >= 6 && PasswordInput.value !== ""){
    PasswordInput.classList.add("is-valid");
    ispasswordOk = true;
  }else{
    PasswordInput.classList.add("is-invalid");
  }


  if(isFirstNameOk && isLastNameOk && isemailok && ispasswordOk){
    alert("Registered successfully");
  }
};
