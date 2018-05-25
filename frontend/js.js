let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {

  //element to do
  const todo=document.createElement('div');
  todo.classList.add('todo-element');
  // belka glowna
  const todoBar = document.createElement('div');
  todoBar.classList.add('todo-element-bar');
  //data w belce
  const todoDate = document.createElement('div');
  todoDate.classList.add('todo-element-bar');
  const date = new Date();
  const dateText = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
  todoDate.innerText = dateText;


}

document.addEventListener('DOMContentLoaded', function () {
  todoList = document.querySelector('#todoList');
  todoForm = document.querySelector('#todoForm');
  todoSearch = document.querySelector('#todoSearch');


todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const textarea = this.querySelector('textarea');
  if (textarea.value !=='') {
    addTask(textarea.value);
    textarea.value='';
    }
  });
});