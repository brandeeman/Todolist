const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    // JSON.stringify() 모든 걸 string으로 바꿔줌
    // localStorage는 string으로만 저장 가능
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

    // string을 array로 바꿔줌. JSON.parse("[1,2,3,4]")

}

function deleteTodo(event){
    // console.dir(event.target.parentElement.innerText);
    //// parentlode or parentElement : target의 부모

    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo){
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);

    // span을 li 밑에 넣음
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();

    // console.log(toDoInput.value);

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

function sayHello(item){
    console.log("Hello", item);
}

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);

    // forEach : array에 있는 각 각의 Item을 불러 와 함수로 실행할 수 있음
    parsedToDos.forEach(sayHello);

    //// 참고 : 화살표 함수
    // parsedToDos.forEach((item) =>(console.log("Hello", item)));
}