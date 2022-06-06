const logInform = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginListner(event) {
    event.preventDefault();
    logInform.classList.add(HIDDEN_CLASSNAME);
    const username = logInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    printGreeting(username);
}

function printGreeting(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    logInform.classList.remove(HIDDEN_CLASSNAME);
    logInform.addEventListener("submit", onLoginListner);
} else {
    printGreeting(savedUsername);
}
