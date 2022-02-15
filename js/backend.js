setURL('http://gruppe-164.developerakademie.net/smallest_backend_ever');

async function saveInformations() {
    await backend.setItem('informations', JSON.stringify(informations));
}

async function init() {
    await downloadFromServer();
    informations = JSON.parse(backend.getItem('informations')) || [];
}

async function deleteTask(i) {
    informations.splice([i], 1);
    await saveInformations();
    await initBacklog();
}


// function deleteTask2(informations[i]) {
//     backend.deleteItem('informations');}
// 

async function saveTaskBoard() {
    await backend.setItem('taskBoard', JSON.stringify(taskBoard));
}

async function initBoard() {
    await downloadFromServer();
    taskBoard = JSON.parse(backend.getItem('taskBoard')) || [];
}

async function deleteTaskBoard(i) {
    informations.splice([i], 1);
    await saveInformations();
    await initBacklog();
}