import {
    Task,
    Folder,
    SuperFolder
} from './modules/factories.js';

import {
    getFormInfo,
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
console.log(inboxFolder.myuuid);

// Test tasks
const task1 = Task('chores', 'wash dishes', 'nov 23', 'high');
const task2 = Task('movies', 'avatar', 'nov 29', 'med');
const task3 = Task('coding', 'todo list', 'dec 10', 'low');

// Test folders
const proj1 = Folder("project 1");
const proj2 = Folder('project 2');

task1.editTask('new thing', 'another new thing', 'new date', 'HIGH');
// console.log(proj1.tasks[0].printTask());

// Testing functionalities
proj1.addTask(task1);
task1.printTask();
proj1.addTask(task2);
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
    // let taskDetails = getFormInfo();
    // const testTask = Task(taskDetails[0], taskDetails[1], taskDetails[2], taskDetails[3]);
    const {taskTitle, taskDescription, taskDueDate, taskPriority} = getFormInfo();

    const testTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);
    console.log(testTask.printTask());
})

getFormInfo();
// createTaskElement(task1);
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

    // createFolderElement(folderTitleInForm);
    appendFolder(folderTitleInForm);

    let newFolder = Folder(folderTitleInForm);
    superFolder.addFolder(newFolder);
    // displayFolders();
    console.log(superFolder.folders);

    folderDialog.close();
});

