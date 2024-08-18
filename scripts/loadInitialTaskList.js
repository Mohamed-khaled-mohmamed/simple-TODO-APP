import { appendTaskToUI } from './appendTaskToUI.js';
import { AppElement } from './elements.js';
import { generateTaskHTML } from './generateTaskHTML.js';
import { isTaskListEmpty } from './isTaskListEmpty.js';
import { toggleDarkMode } from './toggleDarkMode.js';

const loadMode = function () {
  if (localStorage.getItem('darkMod') === 'dark') {
    AppElement?.classList.add('App--isDark');
  } else {
    AppElement?.classList.remove('App--isDark');
  }
};
export const loadInitialTaskList = function () {
  if (!isTaskListEmpty()) {
    let storedTasks = JSON.parse(localStorage.getItem('allTasks'));

    storedTasks.forEach((task) => {
      let taskHTML = generateTaskHTML(task.taskName, task.isActive, task.repeat);
      appendTaskToUI(taskHTML);
    });
  } else {
    showEmptyTaskMessage();
  }
  loadMode();
};
