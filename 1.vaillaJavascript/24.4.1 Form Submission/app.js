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

    // //value에 입력값이 들어가는 것을 확인
    // console.log(loginInput.value);

    const username = loginInput.value;

    if(username === ""){
        alert("Please write your name");
    }else if(username.length > 15){
        alert("username is too long.");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);