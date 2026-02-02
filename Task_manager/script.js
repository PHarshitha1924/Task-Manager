const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.onclick = () => {
        taskSpan.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.onclick = () => {
        li.remove();
    };

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);
    taskInput.value = "";
}
