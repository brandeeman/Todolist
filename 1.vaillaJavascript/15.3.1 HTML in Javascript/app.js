// HTML의 요소를 변경할 수 있음
const title = document.getElementById("title");

title.innerText = "Got you!"

// dir : element 요소를 더 자세히 보여줌
console.dir(title);

title.style.color = "blue";

console.log(title.id);
console.log(title.className);