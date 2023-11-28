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


// add folder button
// - when clicked, create dialog modal
// - get input from user
// - save input value when add is clicked
// - use saved value to create folder on sidebar

function getFolderDialog() {
    const folderDialog = document.getElementById('folder-dialog');

    return folderDialog;
}

function showFolderDialog() {
    getFolderDialog();
    folderDialog.show();
}

function getFolderFormInfo() {
    const folderForm = document.getElementById('folder-form');

    const folderTitleInForm = form.elements['folder-title'];

    return {folderForm, folderTitleInForm};
}

function addFolder(titleValue) {
    const folderDiv = document.createElement('div');
    
}


export {
    getFormInfo,
    addTaskToDom
}