
async function initBacklog() {
    await init();
    showBacklog();
}

function showBacklog() {
let content_backlog = document.getElementById('backlog-content').innerHTML;
    for (let index = 0; index < informations.length; index++) {
        const element = informations[index];
        document.getElementById('backlog-content').innerHTML += `
        <div class="backlog-content-container-flex">
        <div class="assignedToColor">
            Farbe
        </div>
        <div class="assignedToUserImage">
            Bild
        </div>
        <div class="assignedToPerson">
            <div class="assignedToName"> Name </div>
            <a href="mailto:Email@email.com">Email@email.com</a>
        </div>
        <div class="assignedToCategory">
        Category
        </div>
        <div class="assignedToDetails">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur saepe accusamus excepturi
        omnis similique sunt vel magnam nemo facilis.
        </div>
        `
    }
}