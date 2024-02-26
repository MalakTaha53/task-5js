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
  const check = document.querySelectorAll(".tasks ul li .checkInput");
  for(var i=0;i<check.length;i++){
    if (check[i].checked == true) {
      const element = check[i].parentNode;
      const name = element.querySelector("span");
      name.classList.add("remove");
    }
  }
}
