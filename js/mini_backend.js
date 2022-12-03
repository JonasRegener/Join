let response = {};
let URL = '127.0.0.1:8000';
let List = 'http://127.0.0.1:8000/todos/';
let a = 'Test1tit'
let b = 'Test1desc'
let c = 'MA'
let d = 'H'
let e = 'Hans Wurst'
let f = '2022-12-08'

async function getTodos() {
    try {
        let response2 = await fetch('http://127.0.0.1:8000/todos/', { method: 'GET', headers: { 'Content-Type': 'application/json', } });
        if (!response2.ok)
            throw new Error("Response not ok")
        const tasks = await response2.json();
        console.log(tasks);
    }
    catch (error) {
        console.error(error)
    }
}

async function getSubtasks() {
    try {
        let response2 = await fetch('http://127.0.0.1:8000/subtasks/', { method: 'GET', headers: { 'Content-Type': 'application/json', } });
        if (!response2.ok)
            throw new Error("Response not ok")
        const tasks = await response2.json();
        console.log(tasks);
    }
    catch (error) {
        console.error(error)
    }
}


async function updateTodo() {
    let xhr = new XMLHttpRequest();
    xhr.open("UPDATE", "http://127.0.0.1:8000/todos/1");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };


    var data = JSON.stringify({ "id": 2 });

    xhr.send(data);
}
/* async function getTodos(id) {
    try { 
        let singleJsonResponse = await fetch('https://jonas34.pythonanywhere.com/todos/' + id, {  method: 'GET', headers: { 'Content-Type': 'application/json', }});
        if(!singleJsonResponse.ok)
            throw new Error("Response not ok")
        const tasks = await singleJsonResponse.json();
        console.log(tasks); }
        catch (error) {
            console.error(error)
        }
    } */


function postTodo() {
    let a = 'Test1tit'
    let b = 'Test1desc'
    let c = 'MA'
    let d = 'H'
    let e = 'Hans Wurst'
    let f = '2022-12-08'
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/todos/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify({ "title": "abc", "description": b, "category": c, "priority": d, "user": e, "due_date": f });
    xhr.send(data);
}

function postTodo2() {
    let a = 'Test1tit'
    let b = 'Test1desc'
    let c = 'MA'
    let d = 'H'
    let e = 'Hans Wurst'
    let f = '2022-12-08'
    return new Promise(function (resolve, reject) {
        let xhttp = new XMLHttpRequest();
        let serverURL = 'http://127.0.0.1:8000/todos/';
        xhttp.open('POST', serverURL);

        xhttp.onreadystatechange = function (oEvent) {
            if (xhttp.readyState === 4) {
                if (xhttp.status >= 200 && xhttp.status <= 399) {
                    resolve(xhttp.responseText);
                } else {
                    reject(xhttp.statusText);
                }
            }
        };
        var data = JSON.stringify({ "title": "abc", "description": b, "category": c, "priority": d, "user": e, "due_date": f });
        xhttp.setRequestHeader("Content-Type", "application/json", data);
        xhttp.send(data);

    });
}





async function postTodo3() {
    let a = 'Test1tit'
    let b = 'Test1desc'
    let c = 'MA'
    let d = 'H'
    let e = 'Hans Wurst'
    let f = '2022-12-08'
    var data = JSON.stringify({ "title": "abc", "description": b, "category": c, "priority": d, "user": e, "due_date": f });
    try {
        let response2 = await fetch('http://127.0.0.1:8000/todos/', { method: 'POST', body: data, headers: { 'Content-Type': 'application/json', } });
        if (!response2.ok)
            throw new Error("Response not ok")
        const tasks = await response2.json();
        console.log(tasks);
    }
    catch (error) {
        console.error(error)
    }
}


async function postTodo4() {
    let a = 'Test1tit'
    let b = 'Test1desc'
    let c = 'MA'
    let d = 'H'
    let e = 'Hans Wurst'
    let f = '12/30/2022'
    var data = JSON.stringify({
        "title": "Jenny", "description": "ist die beste", "category": "MA", "priority": "H", "user": "Jonas", "due_date": "12/30/2022", "subtasks": [{
            "title": "jenny hauen"
        }, { "title": "war nur spaß" }]
    });
    console.log(data)
    fetch('http://127.0.0.1:8000/todos/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}

async function postTodo5() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/todos/");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    let a = 'Test1tit'
    let b = 'Test1desc'
    let c = 'MA'
    let d = 'H'
    let e = 'Hans Wurst'
    let f = '2022-12-08'
    var data = JSON.stringify({ "title": "abc", "description": b, "category": c, "priority": d, "user": e, "due_date": f });

    xhr.send(data);
}

async function postSubtask() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:8000/subtasks/");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };


    var data = JSON.stringify({ "title": "abc" });

    xhr.send(data);
}


/* let jsonFromServer = {};
let BASE_SERVER_URL;

const backend = {
    setItem: function(key, item) {
        jsonFromServer[key] = item;
        return saveJSONToServer();
    },
    getItem: function(key) {
        if (!jsonFromServer[key]) {
            return null;
        }
        return jsonFromServer[key];
    },
    deleteItem: function(key) {
        delete jsonFromServer[key];
        return saveJSONToServer();
    }
};
window.onload = async function() {
    downloadFromServer();
}

async function downloadFromServer() {
    let result = await loadJSONFromServer();
    jsonFromServer = JSON.parse(result);
    console.log('Loaded', result);
}

function setURL(url) {
    BASE_SERVER_URL = url;
}

/**
 * Loads a JSON or JSON Array to the Server
 * payload {JSON | Array} - The payload you want to store
 */
/* 
async function loadJSONFromServer() {
    let response = await fetch(BASE_SERVER_URL + '/nocors.php?json=database&noache=' + (new Date().getTime()));
    return await response.text();

}

function loadJSONFromServerOld() {
    return new Promise(function(resolve, reject) {
        let xhttp = new XMLHttpRequest();
        let proxy = determineProxySettings();
        let serverURL = proxy + BASE_SERVER_URL + '/nocors.php?json=database&noache=' + (new Date().getTime());




        xhttp.open('GET', serverURL);

        xhttp.onreadystatechange = function(oEvent) {
            if (xhttp.readyState === 4) {
                if (xhttp.status >= 200 && xhttp.status <= 399) {
                    resolve(xhttp.responseText);
                } else {
                    reject(xhttp.statusText);
                }
            }
        };

        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send();

    });
}
 */




/**
 * Saves a JSON or JSON Array to the Server
 */

/*
function saveJSONToServer() {
    return new Promise(function(resolve, reject) {
        let xhttp = new XMLHttpRequest();
        let proxy = determineProxySettings();
        let serverURL = proxy + BASE_SERVER_URL + '/save_json.php';
        xhttp.open('POST', serverURL);

        xhttp.onreadystatechange = function(oEvent) {
            if (xhttp.readyState === 4) {
                if (xhttp.status >= 200 && xhttp.status <= 399) {
                    resolve(xhttp.responseText);
                } else {
                    reject(xhttp.statusText);
                }
            }
        };

        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(jsonFromServer));

    });
}


function determineProxySettings() {
    return '';

    if (window.location.href.indexOf('.developerakademie.com') > -1) {
        return '';
    } else {
        return 'https://cors-anywhere.herokuapp.com/';
    }
}
 */