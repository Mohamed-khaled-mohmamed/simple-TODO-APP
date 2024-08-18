import { appendTaskToUI } from "./appendTaskToUI.js";
import { generateTaskHTML } from "./generateTaskHTML.js";

export const initializeFirstTask = function (taskName) {
  let tasks = [];
  tasks.push({ taskName, isActive: false, repeat: 0 });

  let taskHtml = generateTaskHTML(tasks[0].taskName, tasks[0].isActive, tasks[0].repeat);
  appendTaskToUI(taskHtml);

  localStorage.setItem('allTasks', JSON.stringify(tasks));
};
