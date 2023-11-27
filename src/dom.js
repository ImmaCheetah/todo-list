function getFormInfo() {
    const form = document.getElementById('main-form');

    const taskTitleInForm = form.elements['task-title'];
    const taskDescriptionInForm = form.elements['task-description'];
    const taskDueDateInForm = form.elements['task-due-date'];
    const taskPriorityInForm = form.elements['task-priority'];
    
    let taskTitle = taskTitleInForm.value;
    let taskDescription = taskDescriptionInForm.value;
    let taskDueDate = taskDueDateInForm.value;
    let taskPriority = taskPriorityInForm.value;

    console.log(taskTitle)
    console.log('dom works');
    
    return {taskTitle, taskDescription, taskDueDate, taskPriority};
} 
    


function addTaskToDom(title, desc, date, priority) {
    const testDiv = document.getElementById('task-container');

    title = taskTitle;
    testDiv.textContent = title;
}

export {
    getFormInfo,
    addTaskToDom
}