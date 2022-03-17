// const playername = "juni";
// const playerPoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

// // 무슨 의미인지는 알려주지 않음
// const player = ["juni", 121212, true, "little bit"];

// {} 안에 property(특성) 작성
const player = {
    name: "nico",
    points: 10, 
    fat: true,
};

// console은 object라는 의미
console.log(player);
console.log(player.name);

// player 이름에 접근하는 2가지 방법

console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat= false;
console.log(player);

// constant는 수정할 수 없는데 object는 어떻게 수정이 되었을까?
// object 안의 무언가를 업데이트 할 때는 아무 문제 없음

// property 추가 가능
player.lastName = "potato";
console.log(player);

player.points = player.points + 10;
console.log(player);