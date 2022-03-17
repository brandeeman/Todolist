const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    h1.style.color = "blue";
    console.log("h1 was clicked!");
}

function handleMouseenter(){
    h1.style.color = "green";
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
// body는 특별해서 이렇게 body를 호출할 수 있음
// document로 이렇게 호출할 수 있는 건 body, head, title만 가능
    document.body.style.backgroundColor = "tomato";
}

function hanleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("SO good~~!");
}

// 이벤트 주는 법
h1.onclick = handleTitleClick;

h1.addEventListener("mouseenter", handleMouseenter);

h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", hanleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);