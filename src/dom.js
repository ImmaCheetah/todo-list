export default function dom() {
    const form = document.getElementById('main-form');

    const taskTitleInForm = form.elements['task-title'];
    const taskDescriptionInForm = form.elements['task-description'];
    const taskDueDateInForm = form.elements['task-due-date'];
    const taskPriorityInForm = form.elements['task-priority'];


    function addDomTask() {
        let taskTitle = taskTitleInForm.value;
        let taskDescription = taskDescriptionInForm.value;
        let taskDueDate = taskDueDateInForm.value;
        let taskPriority = taskPriorityInForm.value;

        const domTask = Task(taskTitle, taskDescription, taskDueDate, taskPriority);

        mainFolder.addTask(domTask);
        mainFolder.displayTasks();
    }
     
    addDomTask();

    console.log('dom works');
}
    

