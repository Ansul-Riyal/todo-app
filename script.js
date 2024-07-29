const input = document.getElementsByTagName("textarea")[0];
const list = document.getElementsByClassName("list")[0];

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    input.value.length > 0 && list.appendChild(getTodoItem(input.value));
    input.value = "";
  }
});

function getTodoItem(title, completed = false) {
  const todoItem = document.createElement("div");
  const todoTitle = document.createElement("p");
  const controllers = document.createElement("div");
  const todoCheck = document.createElement("input");
  const btnDelete = document.createElement("i");

  todoTitle.innerText = title;
  todoCheck.type = "checkbox";
  todoCheck.checked = completed;
  btnDelete.className = "ri-delete-bin-line";
  todoItem.className = "todo-item";

  controllers.append(todoCheck, btnDelete);
  todoItem.append(todoTitle, controllers);

  todoCheck.addEventListener("change", () => {
    if (todoCheck.checked) {
      todoTitle.style.textDecoration = "line-through";
      todoTitle.style.opacity = "0.5";
    } else {
      todoTitle.style.textDecoration = "none";
      todoTitle.style.opacity = "1";
    }
  });

  btnDelete.addEventListener("click", () => {
    list.removeChild(todoItem);
  });

  return todoItem;
}
