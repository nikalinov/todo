const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const list = document.getElementById("list-container");
var currList = "toDo";
function addTask() {
    if (inputBox.value === "") alert("you must write something!");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        if (currList !== "toDo") showList("toDo");
        list.appendChild(li);
        inputBox.value = "";
        addButtons(li);
    }
    saveData("toDo");
}
function addButtons(row) {
    let span = document.createElement("span");
    span.innerHTML = "doing";
    span.style = "margin-right:100px; color: #ff5945;";
    span.classList.add("doing");
    row.appendChild(span);
    span = document.createElement("span");
    span.innerHTML = "done";
    span.style = "margin-right:10px; color: #2d8e00;";
    span.classList.add("done");
    row.appendChild(span);
}
//saveData(currList);
list.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(currList);
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData("toDo");
        if (e.target.classList.contains("doing")) moveTask("inProcess", e.target.parentElement.innerHTML);
        else if (e.target.classList.contains("done")) moveTask("done", e.target.parentElement.innerHTML);
    }
});
function moveTask(listType, taskText) {
    var li = document.createElement("li");
    li.innerHTML = taskText;
    showList(listType);
    addButtons(li);
    list.appendChild(li);
    saveData(listType);
}
button.addEventListener("click", addTask);
function saveData(listType) {
    localStorage.setItem(listType, list.innerHTML);
}
function showTasks() {
    const savedData = localStorage.getItem("toDo");
    if (savedData) list.innerHTML = savedData;
}
function showList(listType) {
    var currData = localStorage.getItem(listType);
    if (currData) list.innerHTML = localStorage.getItem(listType);
    else list.innerHTML = "";
    currList = listType;
}
window.addEventListener("load", showTasks);

//# sourceMappingURL=index.672d4772.js.map
