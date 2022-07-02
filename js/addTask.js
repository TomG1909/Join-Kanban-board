async function init() {
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];

    loadBackground(backgrounds);
    setTimeout(() => {
        activeLink();

    }, 50)

}



function addDnone() {
    document.getElementById('createtTaskInfo').classList.add('hide');
}

function changeCreatorImage() {
    let creator = document.getElementById('taskCreator').value;
    let creatorImg = document.getElementById('creatorImg');
    if (creator == 'Majd') {
        creatorImg.src = './img/user.png';
    }
    if (creator == 'Toma') {
        creatorImg.src = './img/Toma.jpeg';
    }
    if (creator == 'Peter') {
        creatorImg.src = './img/user.png';
    }
}