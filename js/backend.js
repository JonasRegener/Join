setURL('http://gruppe-164.developerakademie.net/smallest_backend_ever');

async function saveInformations() {
    await backend.setItem('informations', JSON.stringify(informations));
}

async function init() {
    await downloadFromServer();
    informations = JSON.parse(backend.getItem('informations')) || [];
}

function deleteUser(name) {
    backend.deleteItem('users');
  }