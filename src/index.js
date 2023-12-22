import {
    Task,
    Folder,
    SuperFolder
} from './modules/factories.js';

import {
    getTaskFormInfo,
    getFolderDialog,
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

} from './modules/dom.js';

//Super Folder 
const superFolder = SuperFolder();

// Main Folder that tasks will go into
const inboxFolder = Folder('Inbox');
console.log("Inbox Folder ID is " + inboxFolder.myuuid);

// Test tasks
const task1 = Task('chores', 'wash dishes', 'nov 23', 'high');
const task2 = Task('movies', 'avatar', 'nov 29', 'med');
const task3 = Task('coding', 'todo list', 'dec 10', 'low');

task1.editTask('new thing', 'another new thing', 'new date', 'HIGH');

// Testing functionalities
inboxFolder.addTask(task3);
inboxFolder.addTask(task2);
inboxFolder.addTask(task1);
inboxFolder.displayTasks();
superFolder.addFolder(inboxFolder);
console.log(superFolder);


// Open task modal when clicked
const openTaskModalBtn = document.getElementById('open-task-modal-btn');
openTaskModalBtn.addEventListener('click', function() {
    const taskDialog = document.getElementById('task-dialog');

    taskDialog.showModal();
    appendDropdown(superFolder);
})


// displayFolderTasks(inboxFolder);
// displayFolders(superFolder);

// Open folder modal when clicked
const addFolderBtn = document.getElementById('folder-add-btn');
addFolderBtn.addEventListener('click', function() {
    
    const folderDialog = document.getElementById('folder-dialog');
    // getFolderDialog();
    //use showModal()
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
    console.log(superFolder.folders);

    folderDialog.close();
});

// Go through all folders and check if the clicked button value matches folder value
// then display tasks of that folder to screen
function displayCurrentFolderWithId(tempId) {
    // let tempId = this.value;
    superFolder.folders.forEach(folder => {
        if (tempId === folder.myuuid) {
            clearTaskContainer();
            //display all tasks of this folder to page
            displayFolderTasks(folder);
            console.log("match found");
        }
    });
}

const taskAddBtn = document.getElementById('task-add-btn');
// Create new task instance using info from form
taskAddBtn.addEventListener('click', function(e) {
    e.preventDefault()
    // let anotherID = displayCurrentFolderWithId(folderName.myuuid);
    const selectedFolder = document.getElementById('folder-selection');
    const selectedFolderValue = selectedFolder.value;
    console.log(selectedFolderValue);

    const {taskTitle, taskDescription, taskDueDate, taskPriority} = getTaskFormInfo();

    const newTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);
    superFolder.folders.forEach(folder => {
        if (selectedFolderValue === folder.myuuid) {
            folder.addTask(newTask);
        }
    });
    // displayFolderTasks(newTask);
    console.log(testFolder);
    clearSelectMenu();
})



let testFolder = Folder('test');
testFolder.addTask(task1);
superFolder.addFolder(testFolder);
appendFolder(testFolder);

let testFolder2 = Folder('test2');
testFolder2.addTask(task2);
superFolder.addFolder(testFolder2);
appendFolder(testFolder2);


export {
    displayCurrentFolderWithId
}