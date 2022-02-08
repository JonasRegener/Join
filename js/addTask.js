let informations = [];
let information;

function enterInformation() {
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let urgency = document.getElementById("urgency").value;
    let description = document.getElementById("description").value;
    let currentInformation = { "title": title, "category": category, "urgency": urgency, "description": description,  };
    informations.push(currentInformation);

    console.log(informations);
}

