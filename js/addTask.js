
async function enterInformation() {
    for (let i = 0; i < employeesForTask.length; i++) {
        const element = employeesForTask[i];
        await init();
        let title = document.getElementById("title").value;
        let category = document.getElementById("category").value;
        let urgency = document.getElementById("urgency").value;
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        let firstName = element["firstName"];
        let lastName = element["lastName"];
        let email = element["email"];
        let picture = element["picture"];
        let color;
        if (category == 'Designer') {
            color = '#e2d810';
        }
        if (category == 'Frontend') {
            color = '#d9138a';
        }
        if (category == 'Backend') {
            color = '#12a4d9';
        }
        if (category == 'SCRUM Master') {
            color = '#322e2f';
        }
        if (category == 'Outsorcing') {
            color = '#5c3c92';
        }
        let currentInformation = { "title": title, "category": category, "urgency": urgency, "description": description, "date": date, "color": color, "firsName": firstName, "lastName": lastName, "email": email, "picture": picture};
        informations.push(currentInformation);
        await saveInformations();   
    }

    document.getElementById("title").value = '';
    document.getElementById("category").value = '';
    document.getElementById("urgency").value = '';
    document.getElementById("description").value = '';
    document.getElementById("date").value = '';
    employeesForTask = [];
    document.getElementById("containerAssignedTo").innerHTML = `
    <div class="dropdown">
        <img class="addAssignedTo" src="assets/img/icons8-plus.png" alt="" onclick="showEmployees()">
        <div id="myDropdown" class="dropdown-content">
        </div>
    </div>
    ` 
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showEmployees() {
    for (let i = 0; i < employees.length; i++) {
        const element = employees[i];
        document.getElementById("myDropdown").innerHTML += `
        <a onclick="addSelectedEmployees(${i})"><img class="profile-picture" src="${element["picture"]}"><br>${element["firstName"]} ${element["lastName"]}</a>
        `
    }
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.addAssignedTo')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        document.getElementById("myDropdown").innerHTML = '';
    }
}

function addSelectedEmployees(i) {
    document.getElementById("containerAssignedTo").innerHTML += `
    <div class="profil" id="profil${i}" onclick="deleteSelectedEmployees(${i})">
        <img class="profile-picture" src="${employees[i]["picture"]}" alt="">
        <p>${employees[i]["firstName"]}</p>
        <p>${employees[i]["lastName"]}</p>
    </div>
    `
    employeesForTask.push(employees[i]);
}

function deleteSelectedEmployees(i) {
    let selectedEmployees = document.getElementById(`profil${i}`);
    selectedEmployees.remove();
    employeesForTask.splice([i], 1)
}