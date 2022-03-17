const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked!");
}

// 이벤트 주는 법
title.addEventListener("click", handleTitleClick);