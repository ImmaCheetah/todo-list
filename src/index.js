// Factory function to create a todo task
function TodoTask(title, description, dueDate, priority, destination, index) {

    title = title.toString();
    description = description.toString();

    if (destination === undefined || destination === 'inbox') {
        this
    }
    // console.log(typeof title);

    return {title, description, dueDate, priority, destination};
};

const task1 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');
const task2 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');
const task3 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');

const testTask = TodoTask(4516, 'wash dishes', 'nov 23', 'high');
const testTask2 = TodoTask(45164, 'wash dishgffdes', 'novhf 23', 'higgdh');

const proj1 = Projects("project 1", testTask);
const proj2 = Projects(testTask2);

// const projects = [
//     {
//         'project1': [task1, task2]
//     },
//     {
//         'project2': [task3]
//     }
    
// ]

function Projects(title, task) {
    let tasks = [];

    tasks.push(task);

    const addTask = (newTaskName) => {
        tasks.push(newTaskName);
    }

    return {title, tasks, addTask};
}

function Inbox() {
    let allTasks = [];

    return allTasks;
}

// console.log(testTask);
console.log(proj1);
proj1.addTask(testTask2);
// console.log(proj2);
// console.log(projects[0].project1);
