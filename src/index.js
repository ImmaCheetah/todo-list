// Factory function to create a todo task
function TodoTask(title, description, dueDate, priority, destination) {
    title = title.toString();
    description = description.toString();

    
    // console.log(typeof title);

    return {title, description, dueDate, priority, destination};
};

const task1 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');
const task2 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');
const task3 = TodoTask('chores', 'wash dishes', 'nov 23', 'high');

const testTask = TodoTask(4516, 'wash dishes', 'nov 23', 'high');

const proj1 = Projects(testTask);

// const projects = [
//     {
//         'project1': [task1, task2]
//     },
//     {
//         'project2': [task3]
//     }
    
// ]

function Projects(task) {
    let projects = [];

    projects.push(task);

    return {projects};
}

console.log(testTask);
console.log(proj1);
// console.log(projects[0].project1);
