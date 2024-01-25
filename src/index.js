import {
    Task,
    Folder,
    SuperFolder
} from './modules/factories.js';

import {
    getTaskFormInfo,
    getTaskEditFormInfo,
    getFolderFormInfo,
    appendFolder,
    displayFolderTasks,
    clearTaskContainer,
    appendDropdown,
    displayFolders

} from './modules/dom.js';

import { format } from "date-fns";

//Super Folder 
let superFolder = SuperFolder('123456');

// Open task modal when clicked
const openTaskModalBtn = document.getElementById('open-task-modal-btn');
openTaskModalBtn.addEventListener('click', function() {
    getTaskDialog().reset;
    getTaskDialog().showModal();
    appendDropdown(JSON.parse(localStorage.getItem('folders')));
});

// Get task dialog and return 
function getTaskDialog() {
    const taskDialog = document.getElementById('task-dialog');

    return taskDialog;
}

function getEditDialog() {
    const editDialog = document.getElementById('edit-dialog');

    return editDialog;
}

// Open folder modal when clicked
const addFolderBtn = document.getElementById('folder-add-btn');
addFolderBtn.addEventListener('click', function() {
    const folderForm = document.getElementById('folder-form');
    folderForm.reset();
    
    const folderDialog = document.getElementById('folder-dialog');
    folderDialog.showModal();
    
});

// Event listener to submit folder form
// Create a new folder instance with info from form
// Add to DOM
// Add to super folder
// Should be done on the form instead of button but MDN example with dialog did it this way
const folderSubmitBtn = document.getElementById('folder-confirm-btn');
folderSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const folderDialog = document.getElementById('folder-dialog');
    const {folderTitleInForm} = getFolderFormInfo();

    let newFolder = Folder(folderTitleInForm);
    appendFolder(newFolder);
    
    superFolder.addFolder(newFolder);
    localStorage.setItem('folders', JSON.stringify(superFolder));

    let superFolderFromLs = JSON.parse(localStorage.getItem('folders'));

    recreateSuperFolderFromObject(superFolderFromLs);

    folderDialog.close();

});

const taskAddBtn = document.getElementById('task-add-btn');
// Create new task instance using info from form
taskAddBtn.addEventListener('click', function(e) {
    e.preventDefault()
    // Get value of the selected field (Id because value is set to id in dom.js)
    const selectedFolder = document.getElementById('folder-selection');
    const selectedFolderValue = selectedFolder.value;
    // Get values of the form
    const {taskTitle, taskDescription, taskDueDate, taskPriority} = getTaskFormInfo();

    // Create new task and loop through folder to find matching Id and add
    const newTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);
    superFolder.folders.forEach(folder => {
        if (selectedFolderValue === folder.myFolderUuid) {
            folder.addTask(newTask);
        }
    });

    localStorage.setItem('folders', JSON.stringify(superFolder));

    let superFolderFromLs = JSON.parse(localStorage.getItem('folders'));

    recreateSuperFolderFromObject(superFolderFromLs);

    // Update the tasks of the folder that is currently being displayed to avoid reloading folder
    displayCurrentFolderWithId(selectedFolderValue);
    
    // Clear form fields
    const taskForm = document.getElementById('main-form');
    taskForm.reset();
    getTaskDialog().close();
})

// Select the button with Id and find task with that Id
// Change the info of that task and update folder
// Delete button after and close
const taskEditConfirmBtn = document.getElementById('task-edit-btn');
taskEditConfirmBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const btnId = document.querySelector('.edit-btn-id');
    
    const {taskTitle, taskDescription, taskDueDate, taskPriority} = getTaskEditFormInfo();
    
    superFolder.folders.forEach(folder => {
        folder.tasks.forEach(task => {
            if (btnId.value === task.myTaskUuid) {
                task.editTask(taskTitle, taskDescription, taskDueDate, taskPriority);
                displayCurrentFolderWithId(folder.myFolderUuid);
            }
        })
    });
    
    setLocalStorage();
    btnId.remove();
    getEditDialog().close();
    
})

function loadPresetFolders() {
    if (localStorage.getItem('folders')){
        let superFolderFromLs = JSON.parse(localStorage.getItem('folders'));
        recreateSuperFolderFromObject(superFolderFromLs);

        displayFolders(superFolder);
    } else {
        const task1 = Task('Wash dishes', 'Finish washing rest of the dishes', format(new Date(2024, 2, 19), "MMM do\, yyyy"), 'High');
        const task2 = Task('Vaccuum', 'Clean 2nd floor', format(new Date(2024, 3, 20), "MMM do\, yyyy"), 'Medium');
        const task3 = Task('Finish project', 'Iron out bugs from THAT project', format(new Date(2024, 1, 30), "MMM do\, yyyy"), 'Low');

        let inboxFolder = Folder('Inbox', 'inboxFolder');
        inboxFolder.addTask(task3);
        superFolder.addFolder(inboxFolder);
        appendFolder(inboxFolder);

        let chores = Folder('House Chores');
        chores.addTask(task2);
        chores.addTask(task1);
        superFolder.addFolder(chores);
        appendFolder(chores);

        setLocalStorage();
    }
}

loadPresetFolders();

// Recreate task from generic object
function recreateTaskObj(targetObj) {
    const {title, description, dueDate, priority, myTaskUuid, completeState} = targetObj;

    return Task(title, description, dueDate, priority, myTaskUuid, completeState);
}

// Recreate a folder from generic object
// Loop through GENERIC objects tasks
// For each task, recreate a task and add to that folder
function recreateFolderFromObject(genericObj) {

    const {title,  myFolderUuid} = genericObj;
    
    let folderDupe = Folder(title, myFolderUuid);

    genericObj.tasks.forEach(task => {
        folderDupe.addTask(recreateTaskObj(task));
    })

    return folderDupe;
    
}

function recreateSuperFolderFromObject(genericObj) {
    const {mySuperFolderUuid} = genericObj;

    superFolder = SuperFolder(mySuperFolderUuid);

    genericObj.folders.forEach(folder => {
        superFolder.addFolder(recreateFolderFromObject(folder))
    })

    return superFolder;
}

function setLocalStorage() {
    localStorage.setItem('folders', JSON.stringify(superFolder));
}

// Go through all folders and check if the clicked button value matches folder value
// then display tasks of that folder to screen
function displayCurrentFolderWithId(tempId) {

    superFolder.folders.forEach(folder => {
        if (tempId === folder.myFolderUuid) {
            clearTaskContainer();
            //display all tasks of this folder to page
            displayFolderTasks(folder);
        }
    });
}

function deleteFolderWithId(buttonId) {
    superFolder.folders.forEach(folder => {
        if (buttonId === folder.myFolderUuid) {
            superFolder.deleteFolder(folder);
        }
    });
}

function deleteTaskWithId(buttonId) {
    superFolder.folders.forEach(folder => {
        folder.tasks.forEach(task => {
            if (buttonId === task.myTaskUuid) {
                folder.deleteTask(task);
            }
        })
    });
}

function changeTaskStatus(taskId) {
    superFolder.folders.forEach(folder => {
        folder.tasks.forEach(task => {
            if (taskId === task.myTaskUuid) {
                task.setComplete();
                setLocalStorage();
            }
        })
    });
}

function findTaskWithId(buttonId) {
    let output;
    superFolder.folders.forEach(folder => {
        folder.tasks.forEach(task => {
            if (buttonId === task.myTaskUuid) {
                output = task;
            }
        })
    });
    return output;
}

export {
    displayCurrentFolderWithId,
    deleteFolderWithId,
    deleteTaskWithId,
    changeTaskStatus,
    getTaskDialog,
    findTaskWithId,
    getEditDialog,
    superFolder,
    setLocalStorage
}