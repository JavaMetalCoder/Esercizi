const task = document.getElementById('task');
const button = document.getElementById('btn-task');
const listTask = document.getElementById('task-list');
//Aggiungi task
button.onclick = function() {
    if(task.value === '') {
        alert('Inserisci un task');
        return;
    }
    let taskValue = task.value;
    task.value = '';
    
    function createLiElement() {
    const li = document.createElement("li");
    li.textContent = taskValue;
    listTask.appendChild(li);
    return li;
    }
    const li = createLiElement();
    const buttonLi = document.createElement("button");
    buttonLi.classList.add("delete-btn");
    //Mostra bottone quando il mouse è sopra il task
    li.onmouseover = function() {
        buttonLi.style.display = 'inline';
    }
    li.onmouseout = function() {
        buttonLi.style.display = 'none';
    }
    //Elimina task
    li.appendChild(buttonLi);
    buttonLi.textContent = 'X';
    listTask.addEventListener('click', function(e) {
        if(e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    });
}

