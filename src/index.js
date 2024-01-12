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
    createFolderButton,
    displayFolders

} from './modules/dom.js';

import { formatDistance, subDays } from "date-fns";


//Super Folder 
const superFolder = SuperFolder();

// Open task modal when clicked
const openTaskModalBtn = document.getElementById('open-task-modal-btn');
openTaskModalBtn.addEventListener('click', function() {
    getTaskDialog().reset;
    getTaskDialog().showModal();
    appendDropdown(superFolder);
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

    localStorage.setItem('folders', JSON.stringify(newFolder));

    // saveFolderToStorage(newFolder);
    
    superFolder.addFolder(newFolder);

    folderDialog.close();

    // return folderKeyId;
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

    for (let i = 0; i < localStorage.length; i++) {
        let key = (localStorage.key(i));
        console.log(key);

        let lsFolder = JSON.parse(localStorage.getItem(key));

        if (lsFolder.myFolderUuid === selectedFolderValue) {
            let thisFolder = findFolderWithId(selectedFolderValue);
            let recreatedFolder = recreateFolderObj(lsFolder, thisFolder);

            console.log(recreatedFolder);
            recreatedFolder.addTask(task1);
        }
    }

    // saveTaskToStorage(newTask);
    
    // Update the tasks of the folder that is currently being displayed to avoid reloading folder
    displayCurrentFolderWithId(selectedFolderValue);
    
    // Clear form fields
    const taskForm = document.getElementById('main-form');
    taskForm.reset();
    getTaskDialog().close();
})

function findFolderWithId(buttonId) {
    superFolder.folders.forEach(folder => {
        if (buttonId === folder.myFolderUuid) {
            return folder;
        }
    });
}

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
                console.log(task);
            }
        })
    });
    
    btnId.remove();
    getEditDialog().close();
    
})

// Test tasks
const task1 = Task('chores', 'wash dishes', 'nov 23', 'high');
const task2 = Task('movies', 'avatar', 'nov 29', 'med');
const task3 = Task('coding', 'todo list', 'dec 10', 'low');

let inboxFolder = Folder('Inbox');
inboxFolder.addTask(task1);
superFolder.addFolder(inboxFolder);
appendFolder(inboxFolder);

let testFolder2 = Folder('test2');
testFolder2.addTask(task2);
testFolder2.addTask(task1);
testFolder2.addTask(task3);
testFolder2.deleteTask(task2);
superFolder.addFolder(testFolder2);
// superFolder.deleteFolder(testFolder2);
appendFolder(testFolder2);

function loadPresetFolders() {
    // Old method of storing by unique Ids
    // if (localStorage.length >= 0) {
    //     superFolder.folders.forEach(folder => {
    //         localStorage.setItem('folders', JSON.stringify(folder));
    //         // folder.tasks.forEach(task => {

    //         //     localStorage.setItem(task.myTaskUuid, JSON.stringify(task));
    //         // })
    //     })
    // }
    // Stores under one key
    localStorage.setItem('folders', JSON.stringify(superFolder));
    console.log(JSON.parse(localStorage.getItem('folders')));
}

loadPresetFolders();

function recreateTaskObj(targetObj, replacementObj) {
    const {title, description, dueDate, priority, myTaskUuid} = targetObj;

    replacementObj = Task(title, description, dueDate, priority, myTaskUuid);
    return replacementObj;
}

function recreateFolderObj(targetObj, replacementObj) {
    const {title,  myFolderUuid} = targetObj;

    replacementObj = Task(title, myFolderUuid);
    return replacementObj;
}

function addLsItem(object) {
    let allFolders = JSON.parse(localStorage.getItem('folders')) || [];


}

// let testTask = Task('SOMETHING', 'DESC', new Date(), 'HIGH');
// console.log(testTask);
// localStorage.setItem(testTask.myTaskUuid, JSON.stringify(testTask));
// console.log(JSON.parse(localStorage.getItem(testTask.myTaskUuid)));
// let lsTask = JSON.parse(localStorage.getItem(testTask.myTaskUuid));
// testTask.recreateTaskObj(lsTask, testTask);
// let recreatedTask = recreateTaskObj(lsTask, testTask);
// recreatedTask.changePriority('low');
// console.log(recreatedTask);


function saveFolderToStorage(folder) {
    localStorage.setItem('folder'+ folder.myFolderUuid, JSON.stringify(folder));
}

function saveTaskToStorage(task) {
    localStorage.setItem('task'+ task.myTaskUuid, JSON.stringify(task));
}

// Go through all folders and check if the clicked button value matches folder value
// then display tasks of that folder to screen
function displayCurrentFolderWithId(tempId) {

    superFolder.folders.forEach(folder => {
        if (tempId === folder.myFolderUuid) {
            clearTaskContainer();
            //display all tasks of this folder to page
            displayFolderTasks(folder);
            console.log("match found");
        }
    });
}

function deleteFolderWithId(buttonId) {
    superFolder.folders.forEach(folder => {
        if (buttonId === folder.myFolderUuid) {
            console.log(buttonId);
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
    getEditDialog
}