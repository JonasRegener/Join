
async function showBacklog() {
    await init();
    let content_backlog = document.getElementById('backlog-content').innerHTML;
    document.getElementById('backlog-content').innerHTML = ``;
    for (let index = 0; index < informations.length; index++) {
        const element = informations[index];
        document.getElementById('backlog-content').innerHTML += `
        <div id="${index}" class="backlog-content-container">
        <div class="backlog-content-container-flex" onclick=moveTask(${index})>
        <div class="assignedToColor">
            Farbe
        </div>
        <div class="assignedToUserImage">
            Bild
        </div>
        <div class="assignedToPerson">
            <div class="assignedToName"> Name </div>
            <a href="mailto:Email@email.com">Email@email.com</a>
        </div>
        <div class="assignedToCategory">
        Category
        </div>
        <div class="assignedToDetails">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur saepe accusamus excepturi
        omnis similique sunt vel magnam nemo facilis.
        </div>
        </div>
        `
    }
}

async function addToTaskBoard(i) {
    informations[i]['status'] = "toDo"; 
    taskBoard.push(informations[i]);
    await saveTaskBoard();
    await deleteTask(i);
    await showBacklog();
}

function moveTask(index) {
    document.getElementById(index).innerHTML = ""
    document.getElementById(index).classList.add("backlog-content-container-flex")
    document.getElementById(index).innerHTML += `
    <div class="MoveBacklogButtons" id="backlog${index}" onclick="showBacklog()">
    <div class="moveToBoard" onclick=""> Move Task To Board </div>
    <div class="deleteFromBacklog" onclick=""> Delete Task </div>
    </div>
    `
}