import {
    displayCurrentFolderWithId
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
function createFolderElement(folderName) {
    // const folderDiv = document.querySelector('.folders-div');
    const sidebar = document.querySelector('.sidebar');
    const folderDiv = document.createElement('div');
    const folderBtn = document.createElement('button');
    // const folderDeleteBtn = document.createElement('button');

    folderDiv.classList.add('folder-div');
    folderBtn.classList.add('folder-button');
    folderBtn.textContent = folderName.title;
    folderBtn.value = folderName.myuuid;

    folderDiv.appendChild(folderBtn);

    sidebar.appendChild(folderDiv);

    folderBtn.addEventListener('click', function() {
        displayCurrentFolderWithId(folderName.myuuid);
        console.log(folderName.title, folderName.myuuid);
    });
    
    return folderDiv;
}

// Take in folder name and create folder using function
// Append to sidebar
function appendFolder(folderName) {
    let folderDOM = createFolderElement(folderName);
    
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
    const fieldset = document.getElementById('priority-options');
    
    // select.setAttribute('id', 'folder-selection');
    fieldset.after(select);

    superFolder.folders.forEach(folder => {
        const option = document.createElement('option');
        
        
        option.textContent = folder.title;
        option.value = folder.myuuid; // figure out if this is good way to select
        option.setAttribute('index', index++);

        select.appendChild(option);
    })
}

function clearSelectMenu() {
    const select = document.getElementById('folder-selection')

    // select.remove();
}

function clearSidebar() {
    const foldersDiv = document.querySelector('.folders-div');
    foldersDiv.textContent = '';
}


export {
    getTaskFormInfo,
    getFolderFormInfo,
    createTaskElement,
    createFolderElement,
    appendFolder,
    displayFolderTasks,
    appendTask,
    displayFolders,
    clearTaskContainer,
    appendDropdown,
    clearSelectMenu
}