const inputBox = document.getElementById("input-box");
const button = document.querySelector("button");
const list = document.getElementById("list-container");
var currList = "toDo";
function addTask() {
    if (inputBox.value === "") alert("you must write something!");
    else {
        let li = document.createElement("li");
        li.innerHTML = "<p class='text' style=''>" + inputBox.value + "</p>";
        if (currList !== "toDo") showList("toDo");
        list.appendChild(li);
        inputBox.value = "";
        addDoingButton(li);
        addDoneButton(li);
    }
    saveData("toDo");
}
function addToDoButton(task) {
    let span = document.createElement("span");
    span.innerHTML = "to do";
    span.style = "margin-right: 200px;  color: #ff0000";
    span.classList.add("toDo");
    task.appendChild(span);
}
function addDoingButton(task) {
    let span = document.createElement("span");
    span.innerHTML = "doing";
    span.style = "margin-right: 100px; color: #ff5945;";
    span.classList.add("doing");
    task.appendChild(span);
}
function addDoneButton(task) {
    let span = document.createElement("span");
    span.innerHTML = "done";
    span.style = "color: #2d8e00;";
    span.classList.add("done");
    task.appendChild(span);
}
//saveData(currList);
list.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(currList);
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(currList);
        if (e.target.classList.contains("toDo")) moveTask("toDo", e.target.parentElement.getElementsByClassName("text")[0].innerHTML);
        else if (e.target.classList.contains("doing")) moveTask("inProcess", e.target.parentElement.getElementsByClassName("text")[0].innerHTML);
        else moveTask("done", e.target.parentElement.getElementsByClassName("text")[0].innerHTML);
    }
});
function moveTask(listType, taskText) {
    var li = document.createElement("li");
    li.innerHTML = "<p class='text'>" + taskText + "</p>";
    showList(listType);
    if (listType === "toDo") {
        addDoingButton(li);
        addDoneButton(li);
    } else if (listType === "inProcess") {
        addToDoButton(li);
        addDoneButton(li);
    } else {
        addToDoButton(li);
        addDoingButton(li);
    }
    list.appendChild(li);
    saveData(listType);
    console.log(localStorage.getItem("done"));
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
    if (listType === "Done") listType = listType.toLowerCase();
    var currData = localStorage.getItem(listType);
    if (currData) {
        console.log("aaa");
        list.innerHTML = currData;
    } else list.innerHTML = "";
    currList = listType;
}
window.addEventListener("load", showTasks);

//# sourceMappingURL=index.672d4772.js.map
