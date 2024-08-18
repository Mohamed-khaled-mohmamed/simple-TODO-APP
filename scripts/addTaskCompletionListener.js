import { toggleTaskCompletion } from "./toggleTaskCompletion.js";

export const addTaskCompletionListener = function () {
  const taskElements = document.querySelectorAll('.TaskList__taskContent');

  taskElements.forEach((taskElement) => {
    taskElement.addEventListener('click', () => toggleTaskCompletion(taskElement));
  });
};
