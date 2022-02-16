
async function enterInformation() {
    await init();
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let urgency = document.getElementById("urgency").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
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
    let currentInformation = { "title": title, "category": category, "urgency": urgency, "description": description, "date": date, "color": color};
    informations.push(currentInformation);

    saveInformations();

    document.getElementById("title").value = '';
    document.getElementById("category").value = '';
    document.getElementById("urgency").value = '';
    document.getElementById("description").value = '';
    document.getElementById("date").value = '';
}