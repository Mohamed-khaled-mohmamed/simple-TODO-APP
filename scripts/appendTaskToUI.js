import { addTaskCompletionListener } from './addTaskCompletionListener.js';
import { addTaskRemovalListener } from './addTaskRemovalListener.js';
import { TaskListElement } from './elements.js';

export const appendTaskToUI = function (taskHTML) {
  if (!taskHTML) return;
  TaskListElement.innerHTML += taskHTML;
  addTaskRemovalListener();
  addTaskCompletionListener();
};
