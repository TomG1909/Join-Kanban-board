setURL('https://tomagela.com/projects/Join/smallest_backend_ever');

let todos = [];

let currentDraggedElement;


async function init() {
    await downloadFromServer();
    todos = JSON.parse(backend.getItem('allTasks')) || [];

    includeHTML();
    updateHtml();
    setTimeout(() => {
        activeLink();

    }, 50)

    console.log('todos array',todos)
}

function updateHtml() {

    let todo = todos.filter(t => !t['list'] || t['list'] == 'toDo'); //!!

    document.getElementById('toDo').innerHTML = '';

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        document.getElementById('toDo').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">
        <div class="task-header">
        <div class="date">${element['taskDate']}</div>
        <div class="${element['taskUrgency']}">${element['taskUrgency']}</div>
        </div>
        <span class="spanTitel"> ${element['taskTitle']}  </span>
    
        <span class="spanD"> ${element['taskDescription']} </span>
        
        <div class="task-header">
        <div><img src="${element['creatorImg']}"class="img-profile"> </div>
        <img src="./img/trash.png" class="delete" onclick="Trash(${element.createdAt})">
        </div>
    
         </div>`;

    }


    let inProgress = todos.filter(t => t['list'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let index = 0; index < inProgress.length; index++) {
        const element = inProgress[index];
        document.getElementById('inProgress').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">
        <div class="task-header">
        <div class="date">${element['taskDate']}</div>
        <div class="${element['taskUrgency']}">${element['taskUrgency']}</div>
        </div>
        <span class="spanTitel"> ${element['taskTitle']}  </span>
    
        <span class="spanD"> ${element['taskDescription']} </span>
        
        <div class="task-header">
        <div><img src="${element['creatorImg']}"class="img-profile"> </div>
        <img src="./img/trash.png" class="delete" onclick="ToTrash(${index}, 'inProgress')">
        </div>
    
         </div>`;
    }


    let testing = todos.filter(t => t['list'] == 'Testing');

    document.getElementById('Testing').innerHTML = '';

    for (let index = 0; index < testing.length; index++) {
        const element = testing[index];
        document.getElementById('Testing').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">
        <div class="task-header">
        <div class="date">${element['taskDate']}</div>
        <div class="${element['taskUrgency']}">${element['taskUrgency']}</div>
        </div>
        <span class="spanTitel"> ${element['taskTitle']}  </span>
    
        <span class="spanD"> ${element['taskDescription']} </span>
        
        <div class="task-header">
        <div><img src="${element['creatorImg']}"class="img-profile"> </div>
        <img src="./img/trash.png" class="delete" onclick="ToTrash(${element.index}, 'Testing')">
        </div>
    
         </div>`;
    }


    let done = todos.filter(t => t['list'] == 'Done');

    document.getElementById('Done').innerHTML = '';

    for (let index = 0; index < done.length; index++) {
        const element = done[index];
        document.getElementById('Done').innerHTML += `<div draggable="true" ondragstart="startDragging(${element.createdAt})" class="todo">
        <div class="task-header">
        <div class="date">${element['taskDate']}</div>
        <div class="${element['taskUrgency']}">${element['taskUrgency']}</div>
        </div>
        <span class="spanTitel"> ${element['taskTitle']}  </span>
    
        <span class="spanD"> ${element['taskDescription']} </span>
        
        <div class="task-header">
        <div><img src="${element['creatorImg']}"class="img-profile"> </div>
        <img src="./img/trash.png" class="delete" onclick="ToTrash(${index}, 'Done')">
        </div>
    
         </div>`;
    }



}





function startDragging(createdAt) {
    currentDraggedElement = createdAt; //!!
}

function allowDrop(ev) { //!!!
    ev.preventDefault();
}

async function moveto(list) {
    const task = todos.find(t => t.createdAt === currentDraggedElement);
    task.list = list;
    await backend.setItem('allTasks', JSON.stringify(todos));
    updateHtml();

}

async function ToTrash(position, list) {
    let toDolist = todos.filter(t => t['list'] === list);

    let toDelete = toDolist[position];
    let posToDelete = todos.indexOf(toDelete);
    todos.splice(posToDelete, 1);
    let allTasksAsString = JSON.stringify(todos);
    await backend.setItem('allTasks', allTasksAsString);

    updateHtml();

}

async function Trash(element) {
   

   
    let posToDelete = todos.indexOf(element);
    todos.splice(posToDelete, 1);
    let allTasksAsString = JSON.stringify(todos);
    await backend.setItem('allTasks', allTasksAsString);

    updateHtml();

    console.log('pos', posToDelete)

   
}
