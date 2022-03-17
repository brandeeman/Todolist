// querySelector가 정확히 뭘 찾는지 알려주기 위해 #을 써준다.
// const title1 = document.querySelector("#hello");

const title1 = document.querySelector(".hello h1");

console.log(title1);

const title2 = document.querySelectorAll(".hello h1");

console.log(title2);