const age = parseInt(prompt("how old are you?"));

// boolean으로 알려줌 : isNaN
// console.log(isNaN(age));

if(isNaN(age)){
    console.log("Please write a number");
}else{
    console.log("Thank you for writing your age.")
}