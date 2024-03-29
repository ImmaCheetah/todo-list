import { v4 as uuidv4 } from "uuid";

export function Task(
  title,
  description,
  dueDate,
  priority,
  myTaskUuid = uuidv4(),
  completeState = false,
) {
  const setComplete = () => {
    if (completeState == false) {
      completeState = true;
    } else {
      completeState = false;
    }
  };

  title = title.toString();
  description = description.toString();

  const changePriority = (newPriority) => {
    priority = newPriority;
  };

  const editTask = (newTitle, newDescription, newDueDate, newPriority) => {
    title = newTitle;
    description = newDescription;
    dueDate = newDueDate;
    changePriority(newPriority);
  };

  const printTask = () => {
    console.log(
      `Task title - ${title}, Desc - ${description}, Date - ${dueDate}, Priority - ${priority}`,
    );
  };

  return {
    get title() {
      return title;
    },
    get description() {
      return description;
    },
    get dueDate() {
      return dueDate;
    },
    get priority() {
      return priority;
    },
    get completeState() {
      return completeState;
    },
    setComplete,
    changePriority,
    editTask,
    printTask,
    myTaskUuid,
  };
}

export function Folder(title, myFolderUuid = uuidv4()) {
  let tasks = [];

  const addTask = (newTaskName) => {
    tasks.push(newTaskName);
  };

  const displayTasks = () => {
    for (let i = 0; i < tasks.length; i++) {
      console.log(
        `Task ${i} - ${tasks[i].title}, ${tasks[i].dueDate}, ${tasks[i].priority}`,
      );
    }
  };

  const deleteTask = (taskName) => {
    // tasks.splice(taskName, 1);
    for (let i = tasks.length - 1; i >= 0; --i) {
      if (tasks[i].myTaskUuid === taskName.myTaskUuid) {
        tasks.splice(i, 1);
      }
    }
  };

  return { title, tasks, myFolderUuid, addTask, displayTasks, deleteTask };
}

export function SuperFolder(mySuperFolderUuid = uuidv4()) {
  let folders = [];

  const addFolder = (newFolderName) => {
    folders.push(newFolderName);
  };

  const deleteFolder = (folderName) => {
    for (let i = folders.length - 1; i >= 0; --i) {
      if (folders[i].myFolderUuid === folderName.myFolderUuid) {
        folders.splice(i, 1);
      }
    }
  };

  return { folders, addFolder, deleteFolder, mySuperFolderUuid };
}
