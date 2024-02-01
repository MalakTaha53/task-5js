const btn = document.querySelector(".row .enterTodo button");
btn.onclick = addTask;
function addTask() {
  const taskname = document.querySelector(".row .enterTodo .task").value;
  const task = `<li class="task">
                 <input class="checkInput" type="checkbox" onclick="deleteTask()"/>
                 <span>${taskname}</span>
                 </li>`;
  document.querySelector(".tasks ul").innerHTML += task;
}

function deleteTask() {
  const check = document.querySelector(".tasks ul li .checkInput");
  const element = check.parentNode;
  const name = element.querySelector("span");
  if (check.checked == true) {
    name.classList.add("remove");
  } else {
    name.classList.remove("remove");
  }
}
