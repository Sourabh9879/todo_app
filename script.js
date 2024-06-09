const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

// jab bhi add ya delete karna ho tab ye function call hoga
function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

//task add karne ke liye jab bbhi enter click kar input pe
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); //trim extra spaces remove karne ke liye

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = ""; // input me se value nikal ne ke liye
    allTasks();
  }
});


function handleStatus(e) {
  const checkbox = e.querySelector("input"); 
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

function deleteTask(e) {
  e.parentElement.remove(); 
  allTasks();
}

clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});