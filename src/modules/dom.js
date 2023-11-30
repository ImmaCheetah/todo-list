function displayFolderTasks(folderName) {
    folderName.tasks.forEach(task => {
        appendTask(task, ['task-container']);
    });
}

function displayFolders() {
    

}

function createFolderElement(folderName) {
    const folderDiv = document.createElement('div');
    const folderTitleInDiv = document.createElement('p');

    folderDiv.classList.add('folder-div');
    folderTitleInDiv.textContent = folderName.title;

    folderDiv.appendChild(folderTitleInDiv);

    return folderDiv;
}

function appendFolder(folderName) {
    let folderDOM = createFolderElement(folderName);

    const sidebarFolders = document.querySelector('.sidebar');
    sidebarFolders.appendChild(folderDOM);
}

function createTaskElement(taskName) {
    const taskDiv = document.createElement('div');
    const taskTitleInDiv = document.createElement('p');
    const taskDescriptionInDiv = document.createElement('p');
    const taskDueDateInDiv = document.createElement('p');
    const taskPriorityInDiv = document.createElement('p');

    taskDiv.classList.add('task-div');
    taskTitleInDiv.textContent = taskName.title;
    taskDescriptionInDiv.textContent = taskName.description;
    taskDueDateInDiv.textContent = taskName.dueDate;
    taskPriorityInDiv.textContent = taskName.priority;

    taskDiv.appendChild(taskTitleInDiv);
    taskDiv.appendChild(taskDescriptionInDiv);
    taskDiv.appendChild(taskDueDateInDiv);
    taskDiv.appendChild(taskPriorityInDiv);

    return taskDiv;
}

function appendTask(taskName, location) {
    let taskDOM = createTaskElement(taskName);

    const locationDOM = document.getElementById(location);
    locationDOM.appendChild(taskDOM);
}

function getFormInfo() {
    const form = document.getElementById('main-form');

    const taskTitleInForm = form.elements['task-title'];
    const taskDescriptionInForm = form.elements['task-description'];
    const taskDueDateInForm = form.elements['task-due-date'];
    const taskPriorityInForm = form.elements['task-priority'];
    
    let taskTitle = taskTitleInForm.value;
    let taskDescription = taskDescriptionInForm.value;
    let taskDueDate = taskDueDateInForm.value;
    let taskPriority = taskPriorityInForm.value;

    console.log(taskTitle)
    console.log('dom works');
    
    return {taskTitle, taskDescription, taskDueDate, taskPriority};
} 
    


function addTaskToDom(title, desc, date, priority) {
    const testDiv = document.getElementById('task-container');

    title = taskTitle;
    testDiv.textContent = title;
}


// add folder button
// - when clicked, create dialog modal
// - get input from user
// - save input value when add is clicked
// - use saved value to create folder on sidebar

function getFolderDialog() {
    const folderDialog = document.getElementById('folder-dialog');

    return folderDialog;
}

function showFolderDialog() {
    getFolderDialog();
    folderDialog.show();
}

function getFolderFormInfo() {
    const folderForm = document.getElementById('folder-form');

    const folderTitleInForm = form.elements['folder-title'];

    return {folderForm, folderTitleInForm};
}

function addFolder(titleValue) {
    const folderDiv = document.createElement('div');
    
}


export {
    getFormInfo,
    addTaskToDom,
    createTaskElement,
    displayFolderTasks,
    appendTask
}