async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    activeLink();

    loadBackground();

    showTasks();
}

function showTasks() {
    document.getElementById('tasks').innerHTML = '';

    for (let i = 0; i < allTasks.length; i++) {

        const Task = allTasks[i];
        let urgency = allTasks[i]['taskUrgency'];

        document.getElementById('tasks').innerHTML += 
        
    `<div class="row-backlog">
        <div class="task-container">
        <div class="column left d-flex">
        <div class="${urgency}">${urgency}</div>
        </div>
        <div class="column middle d-flex">
        <div><img src ="${Task['creatorImg']}" class="img-profile"></div>
        <span class="hide-name">${Task['taskCreator']}</span>
        </div>
        <div class="column category pd">${Task['taskCategory']}</div>
      </div>
        <div class="column text descriptionBox">${Task['taskDescription']}</div>
        <div class="container-trash"><img src=./img/trash.png class="delete" onclick="addToTrash(${i})"></div>
        </div>`;
    }
}

async function addToTrash(position) {
    allTasks.splice(position, 1);

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
    showTasks();
}