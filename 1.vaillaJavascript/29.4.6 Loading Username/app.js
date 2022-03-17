const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
//    localStorage : 브라우저에 저장하고 가져다 쓸 수 있게 해준다. -> F12 -> Application -> localstorage 
   localStorage.setItem(USERNAME_KEY, username);
   paintGreetings(username);
}

// loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}