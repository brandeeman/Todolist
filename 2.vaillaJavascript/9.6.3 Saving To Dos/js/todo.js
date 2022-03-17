const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    // JSON.stringify() 모든 걸 string으로 바꿔줌
    // localStorage는 string으로만 저장 가능
    localStorage.setItem("todos", JSON.stringify(toDos));

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