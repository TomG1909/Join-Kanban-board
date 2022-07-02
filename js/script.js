setURL('https://tomagela.com/projects/Join/smallest_backend_ever');


let allTasks = [];


async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    loadBackground();

}



async function addTask() {
    let taskTitle = document.getElementById('titleInputfield').value;
    let taskCategory = document.getElementById('selectCategory').value;
    let taskDate = document.getElementById('dateInputfield').value;
    let taskUrgency = document.getElementById('selectUrgency').value;
    let taskDescription = document.getElementById('descriptionInputfield').value;
    let taskCreator = document.getElementById('taskCreator').value;
    let taskCreatorImg = document.getElementById('creatorImg').src;

    let task = {
        'taskTitle': taskTitle,
        'taskCategory': taskCategory,
        'taskDate': taskDate,
        'taskUrgency': taskUrgency,
        'taskDescription': taskDescription,
        'taskCreator': taskCreator,
        'createdAt': new Date().getTime().toString(),
        'creatorImg': taskCreatorImg
    };

    allTasks.push(task);

    document.getElementById('createtTaskInfo').classList.remove('hide');

    let allTasksAsString = JSON.stringify(allTasks);
    await backend.setItem('allTasks', allTasksAsString);
}