const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseenter(){
    title.style.color = "green";
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

// 이벤트 주는 법
title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseenter);

title.addEventListener("mouseleave", handleMouseLeave);
