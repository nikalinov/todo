const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const list = document.getElementById("list-container");
var currList = "toDo";

function addTask() {
  if (inputBox.value === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    if (currList !== "toDo") {
      showList("toDo");
    }
    list.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }
  saveData("toDo");
}
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData(currList);
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(currList);
  }
});

button.addEventListener("click", addTask);

function saveData(listType) {
  localStorage.setItem(listType, list.innerHTML);
}

function showTasks() {
  const savedData = localStorage.getItem("toDo");
  if (savedData) {
    list.innerHTML = savedData;
  }
}

function showList(listType) {
  var currData = localStorage.getItem(listType);
  if (currData) {
    list.innerHTML = localStorage.getItem(listType);
  } else {
    list.innerHTML = "";
  }
  currList = listType;
}

window.addEventListener("load", showTasks);
