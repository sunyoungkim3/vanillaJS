const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const toDo = toDoList.querySelector("li");

// Todo를 그림
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = newTodo;
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  //   input의 현재 value를 새로운 변수에 복사
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
