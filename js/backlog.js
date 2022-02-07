let users = [];
let text = [];
setURL('http://gruppe-164.developerakademie.net/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    text = JSON.parse(backend.getItem('text')) || [];
}
