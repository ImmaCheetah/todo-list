// Factory function to create a todo task
function TodoTask(title, description, dueDate, priority) {

    title = title.toString();
    description = description.toString();
    // priority = 'bop';

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

//get priority(){return priority;}, set priority(value){priority = value},
function Inbox() {
    let tasks = [];

    const addTask = (newTaskName) => {
        tasks.push(newTaskName);
    }

    const displayTasks = () => {
        for (let i = 0; i < tasks.length; i++) {
            console.log(`Task ${i} - ${tasks[i].title}, ${tasks[i].description}, ${tasks[i].dueDate}, ${tasks[i].priority}`);
        }
    } 

    
    return {tasks, addTask, displayTasks};
}

function Projects(title) {
    tasks = [];
    
    const {addTask, displayTasks} = Inbox();


    
    // const addTask = (newTaskName) => {
    //     projectTasks.push(newTaskName);
    // }

    // const displayTasks = () => {
    //     for (let i = 0; i < projectTasks.length; i++) {
    //         console.log(`Task ${i} - ${projectTasks[i].title}, ${projectTasks[i].description}, ${projectTasks[i].dueDate}, ${projectTasks[i].priority}`);
    //     }
    // }    

    
    return {title, tasks, addTask, displayTasks};
}



const mainInbox = Inbox();

const task1 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');
const task2 = TodoTask('movies', 'avatar', 'nov 29', 'med');
const task3 = TodoTask('coding', 'todo list', 'dec 10', 'low');

const proj1 = Projects("project 1");
const proj2 = Projects('project 2');

task1.changePriority('low');
console.log(task1);
proj1.addTask(task1);
proj2.addTask(task2);
mainInbox.addTask(task3);
console.log(proj1);
console.log(proj2);
console.log(mainInbox);
