import {
    getFormInfo,
    addTaskToDom
} from './dom.js';

// Factory function to create a todo task
function Task(title, description, dueDate, priority) {

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
        get priority() {return priority;}, 
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

    const deleteTask = (index) => {
        tasks.splice(index, 1);
    }

    
    return {title, tasks, addTask, displayTasks, deleteTask};
}

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
proj1.displayTasks();
proj1.deleteTask(1)
proj1.displayTasks();
mainFolder.addTask(task3);
mainFolder.displayTasks();

const addBtn = document.getElementById('add-btn');

const dialog = document.getElementById('dialog');
dialog.show();

addBtn.addEventListener('click', function() {
    // This version uses arrays
    // let taskDetails = getFormInfo();
    // const testTask = Task(taskDetails[0], taskDetails[1], taskDetails[2], taskDetails[3]);
    const {taskTitle, taskDescription, taskDueDate, taskPriority} = getFormInfo();

    const testTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);
    console.log(testTask.printTask());
})

getFormInfo();
// addTaskToDom('testing');
// getInfoFromForm();
// addDomTask();
