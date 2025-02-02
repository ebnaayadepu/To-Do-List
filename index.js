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
    li.className = "flex item-center justify-between p-2 bg-gray-100 rounded-lg";

  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);

  
  // Edit Button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'text-blue-500 hover:text-blue-700 focus:outline-none';
  editButton.addEventListener('click', () => editTodoItem(span));
  li.appendChild(editButton);


   // Delete Button
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.className = 'text-red-500 hover:text-red-700 focus:outline-none';
   deleteButton.addEventListener('click', () => deleteTodoItem(li));
   li.appendChild(deleteButton);
 

}