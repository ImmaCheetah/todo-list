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
    displayFolders
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

const taskDialog = document.getElementById('task-dialog');

taskDialog.show();

const addBtn = document.getElementById('task-add-btn');
// Create new task instance using info from form
addBtn.addEventListener('click', function() {
    // This version uses arrays
    // let taskDetails = getTaskFormInfo();
    // const testTask = Task(taskDetails[0], taskDetails[1], taskDetails[2], taskDetails[3]);
    const {taskTitle, taskDescription, taskDueDate, taskPriority} = getTaskFormInfo();

    const testTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);
    console.log(testTask.printTask());
})

displayFolderTasks(inboxFolder);
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
function openFolderWithID() {
    console.log(this.value);

    let tempId = this.value;
    superFolder.folders.forEach(folder => {
        if (tempId === folder.myuuid) {
            //display all tasks of this folder to page
            displayFolderTasks(folder);
            console.log("match found");
        }
    });
}



export {
    openFolderWithID
}