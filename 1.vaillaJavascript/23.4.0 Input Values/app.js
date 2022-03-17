// // querySelector : Id를 #을 통해 명확히 줘야 한다. classname, tagname 모두 검색하기 때문이다. 
// const loginForm = document.querySelector("#login-form")

// getElementById는 Id를 찾는 걸 알기에 명확히 할 필요 없음
const loginForm = document.getElementById("login-form")

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// 같은 말
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    // console.dir(loginInput);
    // console.log("click");

    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);