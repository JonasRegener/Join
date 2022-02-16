  
async function loadBacklog() {
    await init();
    showBacklog();
}

async function showBacklog() {
    let content_backlog = document.getElementById('backlog-content').innerHTML;
    document.getElementById('backlog-content').innerHTML = ``;
    for (let index = 0; index < informations.length; index++) {
        const element = informations[index];
        document.getElementById('backlog-content').innerHTML += `
        <div id="${index}" class="backlog-content-container">
        <div id="backlog-content-color-${index}"  class="backlog-content-container-flex" onclick=moveTask(${index})>
        <div class="assignedToUserImage">
            Bild
        </div>
        <div class="assignedToPerson">
            <div class="assignedToName"> Name </div>
            <a href="mailto:Email@email.com">Email@email.com</a>
        </div>
        <div class="assignedToCategory">
        ${element['category']}
        </div>
        <div class="assignedToDetails">
        ${element['description']}
        </div>
        </div>
        `
        document.getElementById(`backlog-content-color-${index}`).style.borderLeft = `5px solid ${element['color']}`;
    }
}

async function addToTaskBoard(i) {
    informations[i]['status'] = "toDo";
    taskBoard.push(informations[i]);
    for (let i = 0; i < taskBoard.length; i++) {
        taskBoard[i][`id`] = `${i}`;
    }
    await saveTaskBoard();
    await deleteTask(i);
    await showBacklog();
}

function moveTask(index) {
    document.getElementById(index).innerHTML = "";
    document.getElementById(index).classList.add("backlog-content-container-flex");
    document.getElementById(index).innerHTML += `
    <div class="MoveBacklogButtons" id="backlog${index}" onclick="showBacklog()">
    <div class="moveToBoard" onclick="addToTaskBoard(${index})"> Move Task To Board </div>
    <div class="deleteFromBacklog" onclick="deleteTask(${index})"> Delete Task </div>
    </div>
    `;
}