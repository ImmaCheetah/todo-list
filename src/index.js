import {
    getFormInfo,
    addTaskToDom,
    createTaskElement,
    displayFolderTasks,
    appendTask
} from './modules/dom.js';

// Factory function to create a todo task
function Task(title, description, dueDate, priority) {

    let completeState = false;

    const getCompleteState = () => completeState;

    const setComplete = () => {
        completeState = true;
    }
    title = title.toString();
    description = description.toString();

    const changePriority = (newPriority) => {
        priority = newPriority;
    }

    const editTask = (newTitle, newDescription, newDueDate, newPriority) => {
        title = newTitle;
        description = newDescription;
        dueDate = newDueDate;
        changePriority(newPriority);
    }

    const printTask = () => {
        console.log(`Task title - ${title}, Desc - ${description}, Date - ${dueDate}, Priority - ${priority}`);
    }

    return {
        get title() {return title}, 
        get description() {return description}, 
        get dueDate() {return dueDate}, 
        get priority() {return priority},
        getCompleteState,
        setComplete, 
        changePriority,
        editTask,
        printTask
    };
};


function Folder(title) {
    let tasks = [];

    const addTask = (newTaskName) => {
        tasks.push(newTaskName);
    }

    const displayTasks = () => {
        for (let i = 0; i < tasks.length; i++) {
            console.log(`Task ${i} - ${tasks[i].title}, ${tasks[i].dueDate}, ${tasks[i].priority}`);
        }
    }

    const deleteTask = (taskName) => {
        tasks.splice(taskName, 1);
    }

    
    return {title, tasks, addTask, displayTasks, deleteTask};
}

function SuperFolder() {
    let folders = []

    const addFolder = (newFolderName) => {
        folders.push(newFolderName);
    }

    const deleteFolder = (folderName) => {
        folders.splice(folderName, 1);
    }

    return {folders, addFolder, deleteFolder}
}

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

