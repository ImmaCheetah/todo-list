// Factory function to create a todo task
function TodoTask(title, description, dueDate, priority) {

    title = title.toString();
    description = description.toString();

    return {title, description, dueDate, priority};
};

function Projects(title, task) {
    let projectTasks = [];
    
    projectTasks.push(task);
    
    const addTask = (newTaskName) => {
        projectTasks.push(newTaskName);
    }
    
    return {title, projectTasks, addTask};
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

// console.log(testTask);
proj1.addTask(task2);
proj2.addTask(task1);
mainInbox.addTask(task3);
console.log(proj1);
console.log(proj2);
console.log(mainInbox);
