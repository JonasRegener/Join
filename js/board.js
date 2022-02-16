let todos = [{
    'id': 0,
    'title': 'Putzen',
    'category': 'toDo'
}, {
    'id': 1,
    'title': 'Kochen',
    'category': 'toDo'
}, {
    'id': 2,
    'title': 'Windeln',
    'category': 'inProgress'
}
];





let toDo;
let inProgress;
let testing;
let done;
let currentElement;

function updateHTML() {
    toDo = todos.filter(t => t['category'] == 'toDo');

    document.getElementById('toDo').innerHTML = '';

    for (let i = 0; i < toDo.length; i++) {
        const element = toDo[i];
        
        document.getElementById('toDo').innerHTML += fillOpenHTML(element);
    }

    inProgress = todos.filter(t => t['category'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('inProgress').innerHTML += fillCloseHTML(element);
    }

    testing = todos.filter(t => t['category'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += fillOpenHTML(element);
    }

    done = todos.filter(t => t['category'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += fillOpenHTML(element);
    }
}







function startDragging(id) {
    currentElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(category) {
    todos[currentElement]['category'] = category;
    updateHTML();
}

function fillOpenHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="board-element">${element['title']}</div>`
}

function fillCloseHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="board-element">${element['title']}</div>`
}