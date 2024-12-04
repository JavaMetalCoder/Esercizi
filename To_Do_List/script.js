const task = document.getElementById('task');
const button = document.getElementById('btn-task');
const listTask = document.getElementById('task-list');

button.onclick = function() {
    let taskValue = task.value;
    task.value = '';
    const li = document.createElement("li");
    li.textContent = taskValue;
    listTask.appendChild(li);
}

