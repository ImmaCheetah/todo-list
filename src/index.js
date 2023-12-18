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


const addBtn = document.getElementById('task-add-btn');

const taskDialog = document.getElementById('task-dialog');

taskDialog.show();

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

const addFolderBtn = document.getElementById('folder-add-btn');

addFolderBtn.addEventListener('click', function() {
    
    const folderDialog = document.getElementById('folder-dialog');
    // getFolderDialog();
    //use showModal()
    folderDialog.showModal();
});

const folderSubmitBtn = document.getElementById('folder-confirm-btn');

// Event listener to submit folder form
// Should be done on the form instead of button but MDN example with dialog did it this way
folderSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    const folderDialog = document.getElementById('folder-dialog');
    
    const {folderTitleInForm} = getFolderFormInfo();

    let newFolder = Folder(folderTitleInForm);
    appendFolder(newFolder);
    
    superFolder.addFolder(newFolder);
    // displayFolders();
    console.log(superFolder.folders);

    folderDialog.close();
});

let folderTest = 'test';

let idTest = Folder(folderTest);
appendFolder(folderTest);
console.log(idTest.myuuid);

const folderBtn = document.querySelector('.folder-button');

folderBtn.addEventListener('click', function() {
    console.log('testing folder btn');
    console.log(this.value);
})

