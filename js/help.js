function showHelp(i) {
    if (i == 1) {
        document.getElementById(`help_box${i}`).setAttribute("onclick", `closeHelp(${i});`);
        document.getElementById(`help_box${i}`).innerHTML += /*html*/`
        <div id="help_content${i}" class="help-content">
            <p>In add task you can create tasks and assign them to employees. The following input options are available
            for this purpose:</p>
                <ul>
                    <li>Title</li>
                    <li>Category</li>
                    <li>Due Date</li>
                    <li>Urgency</li>
                    <li>Description</li>
                    <li>Assigned To (employees)</li>
                </ul>
            <p> <b>Important!</b> When creating tasks for multiple employees, one task is created in the backlog for each
            employee. This offers you the possibility to decide later which employee will take over the created
            task.</p>
        </div>
        `;
    }
    if (i == 2) {
        document.getElementById(`help_box${i}`).setAttribute("onclick", `closeHelp(${i});`);
        document.getElementById(`help_box${i}`).innerHTML += /*html*/ `
        <div id="help_content${i}" class="help-content">
            <p>Here you can find all created tasks. With a click on a task you can transfer it to the taskboard or delete it.</p>
            <br>
            <p> <b>Important!</b>  An edit function is not yet available, but will be added in a later update.</p>
            <br>
            <p> <b>Important!</b> for each employee assigned to a task in the add task, a task is created in the backlog!</p>
        </div>
        `
    }
    if (i == 3) {
        document.getElementById(`help_box${i}`).setAttribute("onclick", `closeHelp(${i});`);
        document.getElementById(`help_box${i}`).innerHTML += /*html*/ `
        <div id="help_content${i}" class="help-content">
            <p>Here you can find all assigned tasks in their respective status. With the drag and drop function you can move the tasks. A detailed view and a delete function is possible with the two buttons within the task.</p>
            <br>
            <p> <b>Important!</b>  An edit function is not yet available, but will be added in a later update.</p>
            <br>
        </div>
        `
    }
    if (i == 4) {
        document.getElementById(`help_box${i}`).setAttribute("onclick", `closeHelp(${i});`);
        document.getElementById(`help_box${i}`).innerHTML += /*html*/ `
        <div id="help_content${i}" class="help-content">
            <p> <b>This is an early BETA and the project is still under development. Please do not enter any personal information.</b></p>
            <br>
            <p>The following updates are planned:</p>
                <ul>
                    <li>Member Login</li>
                    <li>Management with rights allocation</li>
                    <li>Tasks editing</li>
                    <li>Add/editing categories, employees, urgencys </li>
                    <li>Create clients</li>
                    <li>Full responsive layout</li>
                    <li>...further functions are planned</li>
                </ul>
        </div>
        `
    }
}

function closeHelp(i) {
        document.getElementById(`help_box${i}`).setAttribute("onclick", `showHelp(${i});`);
        document.getElementById(`help_content${i}`).remove();
}