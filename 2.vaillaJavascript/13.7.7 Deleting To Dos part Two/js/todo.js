const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];
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
    console.log(li.id);
    li.remove();

}

function paintToDo(newTodo){
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

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

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach는 각각의 item을 준다. 
    // 각 item은 object가 된다.
    parsedToDos.forEach(paintToDo);
}

//filter 함수. foreach 함수와 비슷. 각 배열을 sexyFilter에 넣어서 부름
// [1,2,3,4].filter(함수)
// 함수는 true를 return해야 함
// 함수(1) = 1
// 함수(2) = 2
// 함수(3) = 3
// 함수(4) = 4
