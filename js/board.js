let todos = [{
    'id': 0,
    'title': 'Putzen',
    'category': 'open'
}, {
    'id': 1,
    'title': 'Kochen',
    'category': 'open'
}, {
    'id': 2,
    'title': 'Windeln',
    'category': 'open'
}
];

let open;
let close;
let currentElement;

function updateHTML() {
    open = todos.filter(t => t['category'] == 'open');

    document.getElementById('open').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('open').innerHTML += fillOpenHTML(element);
    }

    close = todos.filter(t => t['category'] == 'close');

    document.getElementById('close').innerHTML = '';

    for (let index = 0; index < close.length; index++) {
        const element = close[index];
        document.getElementById('close').innerHTML += fillCloseHTML(element);
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