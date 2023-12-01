
import {
    Task,
    Folder,
    SuperFolder
} from './modules/factories.js';

import {
    getFormInfo,
    createTaskElement,
    displayFolderTasks,
    appendTask,
    displayFolders
} from './modules/dom.js';



//Super Folder 
const superFolder = SuperFolder();

// Main Folder that tasks will go into
const mainFolder = Folder('Inbox');

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
mainFolder.addTask(task3);
mainFolder.addTask(task2);
mainFolder.addTask(task1);
mainFolder.displayTasks();
superFolder.addFolder(mainFolder);
console.log(superFolder);


const addBtn = document.getElementById('task-add-btn');
const header = document.getElementById('header');


const taskDialog = document.getElementById('task-dialog');
const folderDialog = document.getElementById('folder-dialog');

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
displayFolderTasks(mainFolder);
displayFolders(superFolder);

