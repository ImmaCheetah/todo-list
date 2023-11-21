// Factory function to create a todo task
function TodoTask(title, description, dueDate, priority) {

    title = title.toString();
    description = description.toString();

    return {title, description, dueDate, priority};
};

function Projects(title) {
    let projectTasks = [];
    
    const addTask = (newTaskName) => {
        projectTasks.push(newTaskName);
    }

    const displayTasks = () => {
        for (let i = 0; i < projectTasks.length; i++) {
            console.log(`Task ${i} - ${projectTasks[i].title}, ${projectTasks[i].description}, ${projectTasks[i].dueDate}, ${projectTasks[i].priority}`);
        }
    }    

    
    return {title, projectTasks, addTask, displayTasks};
}

function Inbox() {
    let inboxTasks = [];

    const addTask = (newTaskName) => {
        inboxTasks.push(newTaskName);
    }
    
    return {inboxTasks, addTask};
}

const mainInbox = Inbox();

const task1 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');
const task2 = TodoTask('movies', 'avatar', 'nov 29', 'med');
const task3 = TodoTask('coding', 'todo list', 'dec 10', 'low');

const proj1 = Projects("project 1", task1);
const proj2 = Projects('project 2');


proj1.addTask(task2);
proj2.addTask(task1);
mainInbox.addTask(task3);
console.log(proj1.displayTasks());
// console.log(proj2);
// console.log(mainInbox);
