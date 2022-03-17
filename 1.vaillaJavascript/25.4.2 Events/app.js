const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){

    // preventDefault : 함수가 기본적으로 수행하는 동작을 막는 역할. submit의 새로고침을 막는다.
    event.preventDefault();
    // console.log(event);

    const username = loginInput.value;
    console.log(username);
}

// submit event는 버튼을 누르거나 클릭할 때 발생함
//form submit의 기본 동작 : 새로고침 -> 방지해야 함 
loginForm.addEventListener("submit", onLoginSubmit);

// () : 이것이 보이면 브라우저는 function 바로 실행. 위 코드에 포함되어 있음. onLoginSubmit(). () 안에 argument를 포함해서 보냄