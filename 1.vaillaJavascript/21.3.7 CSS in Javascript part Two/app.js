// step1. element를 찾아라.
// step2. event를 listen 해라.
// step3. 그 event에 반응하라.

const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    // CSS에서 받아오는 방법
    // className 이란? getter이면서 setter이다. - css와 연동됨
    // console.log(h1.className);
    // h1.className = clickedClass;

    const clickedClass = "clicked";

    if(h1.className === clickedClass){
        h1.className = "";
    }else{
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);

