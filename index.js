const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList =document.querySelector("#todo-list");

//add to-do item

addButton.addEventListener("click", () => {
   const todoText = todoInput.value.trim();
   if(todoText === "") {
    alert('Input field is empty. Please enter a to-do item.');
    return;
   
   }
   addTodoItem(todoText);
   todoInput.value = "";
});

//add a new todo item

function addTodoItem(text) {
    const li = document.createElement("li")
    li.className = "flex item-center justify-between p-2 bg-gray-100 rounded-lg"
}