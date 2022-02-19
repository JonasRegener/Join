  
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
        document.getElementById(`backlog-content-color-${index}`).style.borderLeft = `8px solid ${element['color']}`;
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