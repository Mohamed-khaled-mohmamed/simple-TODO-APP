import { showEmptyTaskMessage } from './showEmptyTaskMessage.js';

export const deleteTaskFromStorage = function (taskName, repeatNumber) {
  let storedTasks = localStorage.getItem('allTasks');
  let tasks = JSON.parse(storedTasks);

  if (taskName.trim() === '') {
    return;
  }

  tasks = tasks.filter((task) => !(task.taskName === taskName && task.repeat === repeatNumber));

  localStorage.setItem('allTasks', JSON.stringify(tasks));

  if (isTaskListEmpty()) {
    showEmptyTaskMessage();
  }
};
