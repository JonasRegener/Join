
async function enterInformation() {
    await init();
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let urgency = document.getElementById("urgency").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let currentInformation = { "title": title, "category": category, "urgency": urgency, "description": description, "date": date};
    informations.push(currentInformation);

    saveInformations();

    document.getElementById("title").value = '';
    document.getElementById("category").value = '';
    document.getElementById("urgency").value = '';
    document.getElementById("description").value = '';
    document.getElementById("date").value = '';
}