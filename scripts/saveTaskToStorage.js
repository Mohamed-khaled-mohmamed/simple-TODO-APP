import { appendTaskToUI } from "./appendTaskToUI.js";
import { calculateNextRepeat } from "./calculateNextRepeat.js";
import { generateTaskHTML } from "./generateTaskHTML.js";

export const saveTaskToStorage = function (taskName) {
  if (taskName.trim() === '') return;

  let storedTasks = JSON.parse(localStorage.getItem('allTasks')) || [];
  let repeatNumber = calculateNextRepeat(taskName);

  storedTasks.push({ taskName, isActive: false, repeat: repeatNumber });
  let newTask = storedTasks[storedTasks.length - 1];

  let taskHTML = generateTaskHTML(newTask.taskName, newTask.isActive, newTask.repeat);
  appendTaskToUI(taskHTML);

  localStorage.setItem('allTasks', JSON.stringify(storedTasks));
};
