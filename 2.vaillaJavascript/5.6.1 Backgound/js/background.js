const images = ["cat.jpg","dog.jpg","mouse.jpg"];

// 참고 : floor, ceil, round
const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

// (html element를 만드는 법) : createElement
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

// 자바스크립트에서 html에 보내는 방법
// 참고 : appendChild, prepend
document.body.prepend(bgImage);
