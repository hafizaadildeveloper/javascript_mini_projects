const todoItemInput = document.getElementById("todo-item")
const addBtn = document.getElementById("add-button")
const todoList = document.getElementById("todo-list")

addBtn.addEventListener("click", () => {
    if (todoItemInput.value) {
        todoItemInput.style.outline = "1px solid blue"
        const todoValue = todoItemInput.value;
        const li = document.createElement("li")
        li.textContent = todoValue;
        todoList.appendChild(li)
        todoItemInput.value = ''
    } else {
        todoItemInput.style.outline = "1px solid red"
    }
})