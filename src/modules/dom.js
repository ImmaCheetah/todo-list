import {
    displayCurrentFolderWithId,
    deleteFolderWithId,
    deleteTaskWithId,
    changeTaskStatus
} from '../index.js';


// Create all elements for each task property and change text content to corresponding value
// Then add them to a main div and return
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
    createTaskDeleteButton(taskDiv).value = taskName.myTaskUuid;
    createTaskEditButton(taskDiv).value = taskName.myTaskUuid;
    createTaskStatusButton(taskDiv).value = taskName.myTaskUuid;

    return taskDiv;
}

// Take in task and where to append
// Create the task using createTaskElement and assign to variable
// Target element to append to and append
function appendTask(taskName, location) {
    let taskDOM = createTaskElement(taskName);

    const locationDOM = document.getElementById(location);
    locationDOM.appendChild(taskDOM);
}

// Take in folder name then loop through tasks inside folder to append to screen
function displayFolderTasks(folderName) {
    folderName.tasks.forEach(task => {
        appendTask(task, ['task-container']);
    });
}

function getTaskFormInfo() {
    const form = document.getElementById('main-form');

    const taskTitleInForm = form.elements['task-title'];
    const taskDescriptionInForm = form.elements['task-description'];
    const taskDueDateInForm = form.elements['task-due-date'];
    const taskPriorityInForm = form.elements['task-priority'];
    
    let taskTitle = taskTitleInForm.value;
    let taskDescription = taskDescriptionInForm.value;
    let taskDueDate = taskDueDateInForm.value;
    let taskPriority = taskPriorityInForm.value;

    return {taskTitle, taskDescription, taskDueDate, taskPriority};
} 

// Create button to hold folder and title
// Add title to div and return
function createFolderButton(folderName) {
    const sidebar = document.querySelector('.sidebar');
    const folderDiv = document.createElement('div');
    const folderBtn = document.createElement('button');

    folderDiv.classList.add('folder-div');
    folderBtn.classList.add('folder-button');
    folderBtn.textContent = folderName.title;
    folderBtn.value = folderName.myFolderUuid;

    folderDiv.appendChild(folderBtn);
    
    // Create the del btn and  assign same id as folder to it
    createFolderDeleteButton(folderDiv).value = folderName.myFolderUuid;

    sidebar.appendChild(folderDiv);

    folderBtn.addEventListener('click', function() {
        let currentFolderId = folderName.myFolderUuid;
        displayCurrentFolderWithId(folderName.myFolderUuid);
        console.log(folderName.title, folderName.myFolderUuid);
        return currentFolderId;
    });
    
    return folderDiv;
}

function createFolderDeleteButton(folder) {
    const folderDeleteBtn = document.createElement('button');

    folderDeleteBtn.classList.add('folder-delete-btn');
    folderDeleteBtn.textContent = '-';

    folder.appendChild(folderDeleteBtn);

    folderDeleteBtn.addEventListener('click', function(e) {
        let thisButton = e.target;
        deleteFolderWithId(thisButton.value);
        thisButton.parentNode.remove();
    })

    return folderDeleteBtn;
}

function createTaskDeleteButton(task) {
    const taskDeleteBtn = document.createElement('button');

    taskDeleteBtn.classList.add('task-delete-btn');
    taskDeleteBtn.textContent = '-';

    task.appendChild(taskDeleteBtn);

    taskDeleteBtn.addEventListener('click', function(e) {
        let thisButton = e.target;
        deleteTaskWithId(thisButton.value);
        thisButton.parentNode.remove();
    })

    return taskDeleteBtn;
}

function createTaskEditButton(task) {
    const taskEditBtn = document.createElement('button');

    taskEditBtn.classList.add('task-edit-btn');
    taskEditBtn.textContent = '+';

    task.appendChild(taskEditBtn);

    taskEditBtn.addEventListener('click', function() {
        
    })

    return taskEditBtn;
}

function createTaskStatusButton(task) {
    const taskStatusBtn = document.createElement('button');

    taskStatusBtn.classList.add('task-status-btn');
    taskStatusBtn.textContent = '✔';

    task.appendChild(taskStatusBtn);

    taskStatusBtn.addEventListener('click', function(e) {
        let thisButton = e.target;
        changeTaskStatus(thisButton.value);
        
    })

    return taskStatusBtn;
}

// Take in folder name and create folder using function
// Append to sidebar
function appendFolder(folderName) {
    let folderDOM = createFolderButton(folderName);
    
    const sidebarFolders = document.querySelector('.sidebar');
    sidebarFolders.appendChild(folderDOM);
}

// Take in super folder name to loop through each folder and append to sidebar
function displayFolders(superFolderName) {
    // clearSidebar();
    superFolderName.folders.forEach(folder => {
        appendFolder(folder);
    });
}


function getFolderFormInfo() {
    const folderForm = document.getElementById('folder-form');

    const folderTitleInForm = folderForm.elements['folder-title'].value;

    return {folderForm, folderTitleInForm};
}

function clearTaskContainer() {
    const taskContainer = document.getElementById('task-container');

    taskContainer.textContent = '';
}

function appendDropdown(superFolder) {
    let index = 0;
    const select = document.getElementById('folder-selection');

    clearSelectMenu(select);

    superFolder.folders.forEach(folder => {
        const option = document.createElement('option');
        
        option.textContent = folder.title;
        option.value = folder.myFolderUuid; // figure out if this is good way to select
        // option.setAttribute('index', index++);

        select.appendChild(option);
    })
}

function clearSelectMenu(selectOption) {
    for (let i = selectOption.options.length; i >= 0; i--) {
        selectOption.remove(0);
    }
}

export {
    getTaskFormInfo,
    getFolderFormInfo,
    createTaskElement,
    createFolderButton,
    appendFolder,
    displayFolderTasks,
    appendTask,
    displayFolders,
    clearTaskContainer,
    appendDropdown,
    clearSelectMenu
}