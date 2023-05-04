const loinForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function handleSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  loinForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  // form 보여줘
  loinForm.classList.remove(HIDDEN_CLASSNAME);
  loinForm.addEventListener("submit", handleSubmit);
} else {
  // form 지우고 greeting 해줘
  // loinForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
