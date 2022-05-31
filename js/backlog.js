  
async function loadBacklog() {
    await init();
    showBacklog();
}

async function showBacklog() {
        fillBacklogWithContent();
}

function fillBacklogWithContent() {
    document.getElementById('backlog-content').innerHTML = ``;
    for (let i = 0; i < informations.length; i++) {
        const element = informations[i];
        document.getElementById('backlog-content').innerHTML += `
        <div id="${i}" class="backlog-content-container">
        <div id="backlog-content-color-${i}"  class="backlog-content-container-flex" onclick=moveTask(${i})>
        <div class="assignedToUserImage" style="width: 50px;">
            <img class="profile-picture" src="${element["picture"]}" alt="">
        </div>
        <div class="assignedToPerson" style="width: 250px;">
            <div class="assignedToName"> ${element["firstName"]} ${element["lastName"]} </div>
            <a href="mailto:${element["email"]}">${element["email"]}</a>
        </div>
        <div class="assignedToCategory" style="width: 200px;">
        ${element['category']}
        </div>
        <div class="assignedToDetails" style="width: 280px;">
        ${element["title"]}
        </div>
        </div>
        `
        document.getElementById(`backlog-content-color-${i}`).style.borderLeft = `8px solid ${element['color']}`;
    }
}

async function addToTaskBoard(i) {
    setStatusFromTaskForBoard(i);
    taskBoard.push(informations[i]);
    await distributeIdFromAllTasks(i);
    await saveTaskBoard();
    await deleteTask(i);
    await showBacklog();
}

function setStatusFromTaskForBoard(i) {
    informations[i]['status'] = "toDo";
}

async function distributeIdFromAllTasks(i) {
    for (let i = 0; i < taskBoard.length; i++) {
        taskBoard[i][`id`] = `${i}`;
    }
}

function moveTask(i) {
    document.getElementById(i).innerHTML = "";
    document.getElementById(i).classList.add("backlog-content-container-flex");
    document.getElementById(i).innerHTML += /*html*/`
    <div class="MoveBacklogButtons" id="backlog${i}" onclick="showBacklog()">
        <div class="moveToBoard" onclick="addToTaskBoard(${i})" title="Move to board"> <div class="img-backlog"><img src="assets/img/join_details.png" alt=""></div> </div>
        <div class="deleteFromBacklog" onclick="deleteTask(${i})" title="Delete"> <div class="img-backlog"><img src="assets/img/join_trash.png" alt=""></div> </div>
    </div>
    `;
}