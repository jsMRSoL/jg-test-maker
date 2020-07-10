// console.log('app.js loaded');
// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

// Event listeners
todoButton.addEventListener('click', addTodo, false);
todoList.addEventListener('click', deleteCheck, false);
filterOption.addEventListener('click', filterTodos, false);

// Functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // console.log('hello');
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    completedButton.onclick = console.log('done');
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    // clear todoInput value
    todoInput.value = "";
}

function deleteCheck(event) {
    console.log(event.target);
    const item = event.target;
    // delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }
    // mark complete
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodos(event) {
    const todos = todoList.childNodes;
    // console.log(todos);
    // console.log(event.target.value);
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "complete":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                // if you omit the break statement, the next block is executed anyway!
                break;
            case "incomplete":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                // this break is not necessary because there is nothing after it...but hey
                break;
        }
    });
}
