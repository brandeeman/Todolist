// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

// const nonsense = [1,2,"hello", false, null, true , undefined, "nico"];

// console.log(daysOfWeek, nonsense);

// 여기서 바로 정의 가능(variable 따로 안 주고)
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// 배열 안에 불러오고 싶은 위치를 적으면 값을 불러움
console.log(daysOfWeek[5]);

// push, log는 function을 의미
daysOfWeek.push("sun");

console.log(daysOfWeek);
