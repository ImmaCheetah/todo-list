// Factory function to create a todo task
function Task(title, description, dueDate, priority) {

    title = title.toString();
    description = description.toString();

    const changePriority = (newPriority) => {
        priority = newPriority;
    }

    return {
        title, 
        description, 
        dueDate, 
        get priority() {return priority;}, 
        changePriority
    };
};


function Folder(title) {
    let tasks = [];

    const addTask = (newTaskName) => {
        tasks.push(newTaskName);
    }

    const displayTasks = () => {
        for (let i = 0; i < tasks.length; i++) {
            console.log(`Task ${i} - ${tasks[i].title}, ${tasks[i].description}, ${tasks[i].dueDate}, ${tasks[i].priority}`);
        }
    } 

    
    return {title, tasks, addTask, displayTasks};
}




const mainFolder = Folder('Inbox');

const task1 = Task('chores', 'wash dishes', 'nov 23', 'high');
const task2 = Task('movies', 'avatar', 'nov 29', 'med');
const task3 = Task('coding', 'todo list', 'dec 10', 'low');

const proj1 = Folder("project 1");
const proj2 = Folder('project 2');

task1.changePriority('low');
// console.log(task1);
proj1.addTask(task1);
proj1.addTask(task2);
mainFolder.addTask(task3);
console.log(proj1);
console.log(mainFolder);
console.log(proj1.displayTasks());
proj1.tasks[0].changePriority('HIGH');
console.log(proj1.displayTasks());


// function Projects(title) {
//     tasks = [];
    
//     const {addTask, displayTasks} = Inbox();


    
    // const addTask = (newTaskName) => {
    //     projectTasks.push(newTaskName);
    // }

    // const displayTasks = () => {
    //     for (let i = 0; i < projectTasks.length; i++) {
    //         console.log(`Task ${i} - ${projectTasks[i].title}, ${projectTasks[i].description}, ${projectTasks[i].dueDate}, ${projectTasks[i].priority}`);
    //     }
    // }    

    
//     return {title, tasks, addTask, displayTasks};
// }