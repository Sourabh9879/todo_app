
const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

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

//value add karne ke liye ->
inputField.addEventListener("keyup", (e) => {
let inputVal = inputField.value.trim(); //trim fuction removes space of front and back of the inputed value

//agar input ki length 0 se jada hogi tab ->
if (e.key === "Enter" && inputVal.length > 0) {
  let liTag = ` <li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
      </li>`;

  todoLists.insertAdjacentHTML("beforeend", liTag); 
  inputField.value = ""; //input se value nikalne ke liye
  allTasks();
}
});

function handleStatus(e) {
const checkbox = e.querySelector("input"); 
checkbox.checked = checkbox.checked ? false : true;
e.classList.toggle("pending");
allTasks();
}

//task delete karne ke liye ->
function deleteTask(e) {
e.parentElement.remove(); //getting parent element and remove it
allTasks();
}

//Sare task ek sath delete karne ke liye ->
clearButton.addEventListener("click", () => {
todoLists.innerHTML = "";
allTasks();
});