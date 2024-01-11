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

    // let folderKeyId = 'folder' + newFolder.myFolderUuid;
    
    // Create key using folder and Id
    // localStorage.setItem(folderKeyId, JSON.stringify(newFolder));
    saveFolderToStorage(newFolder);
    
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

    // Go through local storage
    // Prase back each item
    // Check it's Id and see if it matches the 

    for (let i = 0; i < localStorage.length; i++) {
        let key = (localStorage.key(i));

        let lsFolder = JSON.parse(localStorage.getItem(key));

        if (lsFolder.myFolderUuid === selectedFolderValue) {
            // lsFolder.addTask(newTask);
            newTask.of(lsFolder);
        }
    }

    saveTaskToStorage(newTask);
    
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
appendFolder(testFolder2);


let folderStorage = [];

if (localStorage.length > 0) {
    console.log('a folder exists');
    // Loop through LS keys, parse them and add to folder storage and superFolder
    for (let i = 0; i < localStorage.length; i++) {
        
        let key = (localStorage.key(i));
        console.log('this is the key ' + key);
        
        let lsFolder = JSON.parse(localStorage.getItem(key));
        
        if (key.includes('folder')) {
            folderStorage.push(lsFolder);
            superFolder.addFolder(lsFolder);
        } else if (key.includes('task')) {
            testFolder2.addTask(lsFolder);
            // folderStorage[i].addTask(lsFolder);
        }
    }
} else {
    console.log('no folder');
    folderStorage = [];
}

folderStorage.forEach(folder => {
    // folderStorage.push(folder);
    appendFolder(folder);
    console.log(folder);
});

console.log(folderStorage);

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


// On page load, check for storage
// If storage contains projects, get projects from storage
// Put said projects into projects array
// Display projects array to DOM (functionality you already have)

export {
    displayCurrentFolderWithId,
    deleteFolderWithId,
    deleteTaskWithId,
    changeTaskStatus,
    getTaskDialog,
    findTaskWithId,
    getEditDialog
}