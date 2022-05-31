setURL('jonasregener.de/smallest_backend_ever');

async function init() {
    await clearAllArrays();
    await downloadFromServer();
    await fillAllArraysWithContentFromServer();
}

async function clearAllArrays() {
    informations = '';
    taskBoard = '';
    employees = '';
}

async function fillAllArraysWithContentFromServer() {
    informations = JSON.parse(backend.getItem('informations')) || [];
    taskBoard = JSON.parse(backend.getItem('taskBoard')) || [];
    employees = JSON.parse(backend.getItem('employees')) || [];
}

async function saveInformations() {
    await backend.setItem('informations', JSON.stringify(informations));
}

async function deleteTask(i) {
    informations.splice([i], 1);
    await saveInformations();
}

async function saveTaskBoard() {
    await backend.setItem('taskBoard', JSON.stringify(taskBoard));
}

async function deleteTaskBoard(i) {
    taskBoard.splice([i], 1);
    for (let i = 0; i < taskBoard.length; i++) {
        taskBoard[i][`id`] = `${i}`;
    }
    await saveTaskBoard();
    await loadTaskBoard();
}

async function saveEmployees() {
    await backend.setItem('employees', JSON.stringify(employees));
}

async function deleteEmployees(i) {
    employees.splice([i], 1);
    await saveEmployees();
}