// step1. element를 찾아라.
// step2. event를 listen 해라.
// step3. 그 event에 반응하라.

const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick(){
//     const clickedClass = "clicked";

//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     }else{
//         h1.classList.add(clickedClass);
//     }
// }

// 위 코드를 'toggle' function 한 줄로 변경
function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

