
let toDo;
let inProgress;
let testing;
let done;
let currentElement;

async function loadTaskBoard() {
    await init();
    includeHTML();
    updateHTML();
}

function updateHTML() {
    toDo = taskBoard.filter(t => t['status'] == 'toDo');

    document.getElementById('toDo').innerHTML = '';

    for (let i = 0; i < toDo.length; i++) {
        const element = toDo[i];

        document.getElementById('toDo').innerHTML += fillOpenHTML(element);
        document.getElementById(`board${element['id']}`).style.borderLeft = `8px solid ${element['color']}`;
    }

    inProgress = taskBoard.filter(t => t['status'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('inProgress').innerHTML += fillCloseHTML(element);
        document.getElementById(`board${element['id']}`).style.borderLeft = `8px solid ${element['color']}`;
    }

    testing = taskBoard.filter(t => t['status'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += fillCloseHTML(element);
        document.getElementById(`board${element['id']}`).style.borderLeft = `8px solid ${element['color']}`;
    }

    done = taskBoard.filter(t => t['status'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += fillCloseHTML(element);
        document.getElementById(`board${element['id']}`).style.borderLeft = `8px solid ${element['color']}`;
    }
}

function startDragging(id) {
    currentElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

async function drop(status) {
    taskBoard[currentElement]['status'] = status;
    await saveTaskBoard();
    updateHTML();
}

function fillOpenHTML(element) {
    return /*html*/`
    <div id="board${element['id']}" draggable="true" ondragstart="startDragging(${element['id']})" class="board-element">
        <div class="board-category-first">
            <img class="profile-picture" src="${element["picture"]}" alt="">
            <div>
                <p>${element['firstName']} ${element['lastName']}</p>
                <p>${element['email']}</p>
            </div>
        </div>
        <p>${element['category']}</p>
        <p>${element['title']}</p>
        <div id="board_category_end_no_details_${element['id']}" class="board-category-end">
            <div class="board-actions" title="Show details" onclick="showDetails(${element['id']})"><img src="assets/img/join_details.png" alt=""></div> 
            <div class="board-actions" title="Delete" onclick="deleteTaskBoard(${element['id']})"><img src="assets/img/join_trash.png" alt=""></div> 
        </div>
    </div>`
}

function fillCloseHTML(element) {
    return /*html*/`
    <div id="board${element['id']}" draggable="true" ondragstart="startDragging(${element['id']})" class="board-element">
        <div class="board-category-first">
            <img class="profile-picture" src="${element["picture"]}" alt="">
            <div>
                <p>${element['firstName']} ${element['lastName']}</p>
                <p>${element['email']}</p>
            </div>
        </div>
        <p>${element['category']}</p>
        <p>${element['title']}</p>
        <div id="board_category_end_no_details_${element['id']}" class="board-category-end">
            <div class="board-actions" title="Show details" onclick="showDetails(${element['id']})"><img src="assets/img/join_details.png" alt=""></div> 
            <div class="board-actions" title="Delete" onclick="deleteTaskBoard(${element['id']})"><img src="assets/img/join_trash.png" alt=""></div> 
        </div>
    </div>`
}

function showDetails(i) {
    document.getElementById(`board_category_end_no_details_${i}`).classList.add('dp-none');
    document.getElementById(`board${i}`).innerHTML += /*html*/`
    <p id="board_category_end_description_${i}">${taskBoard[i]['description']}</p>
    <div id="board_category_end_details_${i}" class="board-category-end">
            <div class="board-actions" title="Show details" onclick="closeDetails(${i})"><img src="assets/img/minus_join.png" alt=""></div> 
    </div>
    `;
}

function closeDetails(i) {
    document.getElementById(`board_category_end_description_${i}`).remove();
    document.getElementById(`board_category_end_details_${i}`).remove();
    document.getElementById(`board_category_end_no_details_${i}`).classList.remove('dp-none');
}