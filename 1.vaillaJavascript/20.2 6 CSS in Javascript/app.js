// step1. element를 찾아라.
// step2. event를 listen 해라.
// step3. 그 event에 반응하라.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }

    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

