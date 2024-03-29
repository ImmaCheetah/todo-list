import { format, parse } from "date-fns";
import {
  displayCurrentFolderWithId,
  deleteFolderWithId,
  deleteTaskWithId,
  changeTaskStatus,
  findTaskWithId,
  getEditDialog,
  setLocalStorage,
} from "../index.js";

import CheckIcon from "../img/check.png";
import EditIcon from "../img/edit.png";
import DeleteIcon from "../img/delete.png";

// Create all elements for each task property and change text content to corresponding value
// Then add them to a main div and return
function createTaskElement(taskName) {
  const taskDiv = document.createElement("div");
  const taskTitleInDiv = document.createElement("h4");
  const taskDescriptionInDiv = document.createElement("p");
  const taskDueDateInDiv = document.createElement("p");
  const taskPriorityInDiv = document.createElement("p");
  const taskLeftDiv = document.createElement("div");
  const taskRightDiv = document.createElement("div");
  const taskTitleDiv = document.createElement("div");
  const taskDescriptionDiv = document.createElement("div");

  taskDiv.classList.add("task-div");
  taskTitleInDiv.textContent = taskName.title;
  taskDescriptionInDiv.textContent = taskName.description;
  taskDueDateInDiv.textContent = `Due: ${taskName.dueDate}`;
  taskPriorityInDiv.textContent = taskName.priority;

  taskLeftDiv.classList.add("task-left-div");
  taskRightDiv.classList.add("task-right-div");
  taskTitleDiv.classList.add("task-title-div");
  taskDescriptionDiv.classList.add("task-description-div");

  taskTitleDiv.appendChild(taskTitleInDiv);
  taskDescriptionDiv.appendChild(taskDescriptionInDiv);

  taskLeftDiv.appendChild(taskTitleDiv);
  taskLeftDiv.appendChild(taskDescriptionDiv);
  taskRightDiv.appendChild(taskDueDateInDiv);

  // Add colour of priority
  changePriorityStyle(taskDiv, taskName.priority.toLowerCase());

  if (taskName.completeState != false) {
    changeCompleteStateStyle(taskDiv, "complete-task");
  }

  taskDiv.appendChild(taskLeftDiv);
  taskDiv.appendChild(taskRightDiv);

  createTaskStatusButton(taskRightDiv).value = taskName.myTaskUuid;
  createTaskEditButton(taskRightDiv).value = taskName.myTaskUuid;
  createTaskDeleteButton(taskRightDiv).value = taskName.myTaskUuid;

  return taskDiv;
}

function changePriorityStyle(element, priority) {
  element.classList.add(priority);
}

function changeCompleteStateStyle(element, completeClass) {
  element.classList.add(completeClass);
}

// Take in task and where to append
// Create the task using createTaskElement and assign to variable
// Target element to append to and append
function appendTask(taskName, location) {
  const taskDOM = createTaskElement(taskName);

  const locationDOM = document.getElementById(location);
  locationDOM.appendChild(taskDOM);
}

// Take in folder name then loop through tasks inside folder to append to screen
function displayFolderTasks(folderName) {
  folderName.tasks.forEach((task) => {
    appendTask(task, ["task-container"]);
  });
}

function getTaskFormInfo() {
  const form = document.getElementById("main-form");

  const taskTitleInForm = form.elements["task-title"];
  const taskDescriptionInForm = form.elements["task-description"];
  const taskDueDateInForm = form.elements["task-due-date"];
  const taskPriorityInForm = form.elements["task-priority"];

  const taskTitle = taskTitleInForm.value;
  const taskDescription = taskDescriptionInForm.value;
  const taskDueDate = format(new Date(taskDueDateInForm.value), "MMM do, yyyy");
  const taskPriority = taskPriorityInForm.value;

  return {
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
  };
}

function getTaskEditFormInfo() {
  const form = document.getElementById("edit-form");

  const taskTitleInForm = form.elements["task-title"];
  const taskDescriptionInForm = form.elements["task-description"];
  const taskDueDateInForm = form.elements["task-due-date"];
  const taskPriorityInForm = form.elements["task-priority"];

  const taskTitle = taskTitleInForm.value;
  const taskDescription = taskDescriptionInForm.value;
  const taskDueDate = format(new Date(taskDueDateInForm.value), "MMM do, yyyy");
  const taskPriority = taskPriorityInForm.value;

  return {
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
  };
}

// Create button to hold folder and title
// Add title to div and return
function createFolderButton(folderName) {
  const sidebar = document.querySelector(".sidebar-top");
  const folderDiv = document.createElement("div");
  const folderBtn = document.createElement("button");

  folderDiv.classList.add("folder-div");
  folderBtn.classList.add("folder-button");
  folderBtn.textContent = folderName.title;
  folderBtn.value = folderName.myFolderUuid;

  folderDiv.appendChild(folderBtn);

  // Create the del btn and  assign same id as folder to it
  createFolderDeleteButton(folderDiv).value = folderName.myFolderUuid;

  // Remove delete button of inbox folder
  if (folderName.myFolderUuid === "inboxFolder") {
    const childBtn = folderDiv.childNodes[1];
    childBtn.parentNode.removeChild(childBtn);
  }

  sidebar.appendChild(folderDiv);

  folderBtn.addEventListener("click", () => {
    const titleDisplay = document.querySelector(".title-display-div");
    const folderTitle = document.querySelector(".folder-display-title");

    // folderTitle.textContent = '';
    folderTitle.textContent = folderName.title;
    // titleDisplay.appendChild(folderTitle);

    const currentFolderId = folderName.myFolderUuid;
    displayCurrentFolderWithId(folderName.myFolderUuid);
    return currentFolderId;
  });

  return folderDiv;
}

// Take in folder name and create folder using function
// Append to sidebar
function appendFolder(folderName) {
  const folderDOM = createFolderButton(folderName);

  const sidebarFolders = document.querySelector(".sidebar-top");
  const inboxDiv = document.querySelector(".inbox-div");

  if (folderName.myFolderUuid === "inboxFolder") {
    inboxDiv.appendChild(folderDOM);
  } else {
    sidebarFolders.appendChild(folderDOM);
  }
}

// Take in super folder name to loop through each folder and append to sidebar
function displayFolders(superFolderName) {
  // clearSidebar();
  superFolderName.folders.forEach((folder) => {
    appendFolder(folder);
  });
}

function createFolderDeleteButton(folder) {
  const folderDeleteBtn = document.createElement("button");

  const folderDeleteIcon = new Image();
  folderDeleteIcon.src = DeleteIcon;

  folderDeleteIcon.classList.add("folder-delete-icon");
  folderDeleteBtn.appendChild(folderDeleteIcon);

  folder.appendChild(folderDeleteBtn);

  folderDeleteBtn.addEventListener("click", (e) => {
    const thisButton = e.target;
    deleteFolderWithId(thisButton.value);
    thisButton.parentNode.remove();
    setLocalStorage();
  });

  return folderDeleteBtn;
}

function createTaskDeleteButton(task) {
  const taskDeleteBtn = document.createElement("button");
  const taskDeleteIcon = new Image();
  taskDeleteIcon.src = DeleteIcon;

  taskDeleteIcon.classList.add("task-modify-btn");
  taskDeleteBtn.appendChild(taskDeleteIcon);

  task.appendChild(taskDeleteBtn);

  taskDeleteBtn.addEventListener("click", (e) => {
    const thisButton = e.target;
    deleteTaskWithId(thisButton.value);
    thisButton.parentNode.parentNode.remove();
    setLocalStorage();
  });

  return taskDeleteBtn;
}

function createTaskEditButton(task) {
  const taskEditBtn = document.createElement("button");

  const taskEditIcon = new Image();
  taskEditIcon.src = EditIcon;

  taskEditIcon.classList.add("task-modify-btn");
  taskEditBtn.appendChild(taskEditIcon);

  // taskEditBtn.classList.add('task-edit-btn');
  // taskEditBtn.textContent = '+';

  task.appendChild(taskEditBtn);

  taskEditBtn.addEventListener("click", (e) => {
    // Create a button to hold Id value
    const editForm = document.getElementById("edit-form");
    const btnForId = document.createElement("button");

    btnForId.classList.add("edit-btn-id");
    btnForId.value = e.target.value;
    editForm.appendChild(btnForId);

    // Change form fields to task info and open modal
    changeTaskFormFields(findTaskWithId(e.target.value));
    getEditDialog().showModal();
  });

  return taskEditBtn;
}

function createTaskStatusButton(task) {
  const taskStatusBtn = document.createElement("button");

  const taskStatusIcon = new Image();
  taskStatusIcon.src = CheckIcon;

  taskStatusIcon.classList.add("task-modify-btn");
  taskStatusBtn.appendChild(taskStatusIcon);

  task.appendChild(taskStatusBtn);

  taskStatusBtn.addEventListener("click", (e) => {
    const thisButton = e.target;
    changeTaskStatus(thisButton.value);

    toggleCompleteStyle(thisButton);
    setLocalStorage();
  });

  return taskStatusBtn;
}

function toggleCompleteStyle(element) {
  if (!element.parentNode.parentNode.classList.contains("complete-task")) {
    element.parentNode.parentNode.classList.add("complete-task");
  } else {
    element.parentNode.parentNode.classList.remove("complete-task");
  }
}

function changeTaskFormFields(task) {
  const form = document.getElementById("edit-form");

  const taskTitleInForm = form.elements["task-title"];
  const taskDescriptionInForm = form.elements["task-description"];
  const taskDueDateInForm = form.elements["task-due-date"];
  const taskPriorityInForm = form.elements["task-priority"];

  const tempDate = parse(task.dueDate, "MMM do, yyyy", new Date());

  taskTitleInForm.value = task.title;
  taskDescriptionInForm.value = task.description;
  taskDueDateInForm.valueAsDate = tempDate;
  taskPriorityInForm.value = task.priority;
}

function getFolderFormInfo() {
  const folderForm = document.getElementById("folder-form");

  const folderTitleInForm = folderForm.elements["folder-title"].value;

  return { folderForm, folderTitleInForm };
}

function clearTaskContainer() {
  const taskContainer = document.getElementById("task-container");

  taskContainer.textContent = "";
}

function appendDropdown(superFolder) {
  const select = document.getElementById("folder-selection");

  clearSelectMenu(select);

  superFolder.folders.forEach((folder) => {
    const option = document.createElement("option");

    option.textContent = folder.title;
    option.value = folder.myFolderUuid; // figure out if this is good way to select
    // option.setAttribute('index', index++);

    select.appendChild(option);
  });
}

function clearSelectMenu(selectOption) {
  for (let i = selectOption.options.length; i >= 0; i--) {
    selectOption.remove(0);
  }
}

export {
  getTaskFormInfo,
  getTaskEditFormInfo,
  getFolderFormInfo,
  createTaskElement,
  createFolderButton,
  appendFolder,
  displayFolderTasks,
  appendTask,
  displayFolders,
  clearTaskContainer,
  appendDropdown,
  clearSelectMenu,
};
