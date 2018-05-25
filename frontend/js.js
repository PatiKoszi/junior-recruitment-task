let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
  console.log('Dodaje zadanie do listy')
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