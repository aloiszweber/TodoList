
let form = document.querySelector('form');

function storeList () {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos () {
  list.innerHTML = window.localStorage.todoList;
}

getTodos();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  list.innerHTML += `<li> ${item.value} </li>`;
  item.value = "";
  storeList();
});


list.addEventListener('click', (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
    storeList();
  }
  else {
    e.target.classList = "checked";
  }
  });