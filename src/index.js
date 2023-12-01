
// Factory function to create a todo task
export function Task(title, description, dueDate, priority) {

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


export function Folder(title) {
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

export function SuperFolder() {
    let folders = []

    const addFolder = (newFolderName) => {
        folders.push(newFolderName);
    }

    const deleteFolder = (folderName) => {
        folders.splice(folderName, 1);
    }

    return {folders, addFolder, deleteFolder}
}



