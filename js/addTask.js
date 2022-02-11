let informations = [];
let information;

function enterInformation() {
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let urgency = document.getElementById("urgency").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let currentInformation = { "title": title, "category": category, "urgency": urgency, "description": description, "date": date };
    informations.push(currentInformation);

    console.log(informations);
}

