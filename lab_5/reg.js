let userForm = document.getElementById("form-user");
const constFormHeight = userForm.offsetHeight;


let checkbox = document.getElementById("user-checkbox");
let btn = document.getElementById("btn")

checkbox.addEventListener('change', function() {
  if (this.checked) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
});

let username = document.getElementById("user-name");
let secondname = document.getElementById("user-secondname");
let login = document.getElementById("user-login");
let email = document.getElementById("user-email")
let pass = document.getElementById("user-pass");
let pass2 = document.getElementById("user-pass-2");

let loginErr = document.getElementById("err-login");
let passErr = document.getElementById("err-pass");
let pass2Err = document.getElementById("err-pass2");

username.addEventListener('input', function(){
  if (!/^([A-я]|[A-z]|\s|-)*$/.test(username.value)) {
      username.style.borderColor = "red";
  }
  else {
    username.style.borderColor = "";
  }
})

secondname.addEventListener('input', function(){
  if (!/^([A-я]|[A-z]|\s|-)*$/.test(secondname.value)) {
    secondname.style.borderColor = "red";
  }
  else {
    secondname.style.borderColor = "";
  }
})

login.addEventListener('input', function(){
  let err = "";
  if (!/^([A-я]|[A-z]|\d|@|\.|\+|-|_)*$/.test(login.value)) {
    login.style.borderColor = "red";
    err += "Доступны только буквы, цифры и символы @.+-_!<br>"
  }
  else {
    login.style.borderColor = "";
  }
  if ((login.value.length < 5) && (login.value != "")){
    err += "Логин должен содержать больше 5-ти символов!<br>"
  }
  if (login.value.length > 150){
    err += "Логин должен содержать меньше 150-ти символов!<br>"
  }
  if ((login.value == pass.value) && (login.value != "")) {
    err += "Логин не должен совпадать с паролем!<br>"
  }
  loginErr.innerHTML = err;
  
  
})

email.addEventListener('input', function(){
  if ((!/^([A-z]|\d|_|-)+@(mail|gmail|yandex)\.(ru|net)$/.test(email.value)) && (email.value != "")) {
    email.style.borderColor = "red";
  }
  else {
    email.style.borderColor = "";
  }
})

pass.addEventListener('input', function(){
  let err = "";
  if ((!/^.*\D.*$/.test(pass.value))&& (pass.value != "")) {
    pass.style.borderColor = "red";
    err += "Пароль должен содержать минимум один нецифровой символ!<br>"
  }
  else {
    pass.style.borderColor = "";
  }

  if ((pass.value.length < 8) && (pass.value != "")){
    err += "Пароль должен содержать больше 8-ти символов!<br>"
  }
  if (pass.value.length > 25){
    err += "Логин должен содержать меньше 25-ти символов!<br>"
  }
  if ((login.value == pass.value) && (login.value != "")) {
    err += "Логин не должен совпадать с паролем!<br>"
  }
  passErr.innerHTML = err;
  
})



pass2.addEventListener('input', function(){
  let err = ""
  if ((!/^.*\D.*$/.test(pass2.value))&& (pass2.value != "")) {
    pass2.style.borderColor = "red";
    err += "Пароль должен содержать минимум один нецифровой символ!<br>"
  }
  else {
    pass2.style.borderColor = "";
  }

  
  if ((pass2.value.length < 8) && (pass2.value != "")){
    err += "Пароль должен содержать больше 8-ти символов!<br>"
  }
  if (pass2.value.length > 25){
    err += "Пароль должен содержать меньше 25-ти символов!<br>"
  }
  if ((pass2.value != pass.value) && (pass2.value != "")) {
    err += "Пароли должны совпадать!<br>"
  }
  pass2Err.innerHTML = err;
})

function validateMyForm(){
  if ((login.value == pass.value) && (login.value != "")){
    alert("Ошибка! Логин не может быть равен паролю!")
    returnToPreviousPage();
    return false;
  }
  if (pass.value != pass2.value) {
    alert("Ошибка! пароли не совпадают!")
    returnToPreviousPage();
    return false;
  }
  return true;
}