// 그냥 function을 쓸 때랑 object에서 function을 쓸 때랑 약간 다름 

const player = {
    name : "juni",
    sayHello : function(otherPersonName){
        console.log("hello! " + otherPersonName + ". nice to meet you");
    },
};

console.log(player.name);
player.sayHello("Song");
player.sayHello("Chang");
