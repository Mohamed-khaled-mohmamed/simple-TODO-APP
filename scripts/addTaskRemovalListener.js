import { deleteTaskFromStorage } from "./deleteTaskFromStorage.js";

export const addTaskRemovalListener = function () {
  let deleteIcons = document.querySelectorAll('.TaskList__deleteIcon');

  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
      const taskElement = this.closest('.TaskList__taskContent');
      const taskName = taskElement.querySelector('.TaskList__value').textContent.trim();
      let repeatNum = parseInt(taskElement.getAttribute('data-repeat'));

      taskElement.remove();
      deleteIcons = document.querySelectorAll('.TaskList__deleteIcon');

      deleteTaskFromStorage(taskName, repeatNum);
    });
  });
};
