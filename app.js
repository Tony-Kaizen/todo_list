const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteTodo = document.querySelector('.fas fa-trash');

// generate an html template
const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash delete"></i>
  </li>
  `
  list.innerHTML += html;
};

// add a todo item
addTodo.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addTodo.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addTodo.reset();
  }
});

//delete a todo item
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});