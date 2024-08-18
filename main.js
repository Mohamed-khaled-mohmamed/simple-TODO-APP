
import { AppElement, TaskListElement, TaskListLink, TaskSearchBarButton, darkThemeToggleElement, getCheckboxElements, getDeleteIcons, inputElement } from './scripts/elements.js';
import { extractTaskName } from './scripts/extractTaskName.js';
import { initializeFirstTask } from './scripts/initializeFirstTask.js';
import { isTaskListEmpty } from './scripts/isTaskListEmpty.js';
import { loadInitialTaskList } from './scripts/loadInitialTaskList.js';
import { saveTaskToStorage } from './scripts/saveTaskToStorage.js';
import { toggleDarkMode } from './scripts/toggleDarkMode.js';

window.document.addEventListener('DOMContentLoaded', () => {
  loadInitialTaskList();
});

TaskSearchBarButton.addEventListener('click', (e) => {
  e.preventDefault();
  const isEmpty = isTaskListEmpty();
  let taskName = extractTaskName(inputElement);

  if (isEmpty && taskName !== '') {
    document.querySelector('.EmptyList').remove();
    initializeFirstTask(taskName);
    inputElement.value = '';
  } else if (!isEmpty && taskName !== '') {
    saveTaskToStorage(taskName);
    inputElement.value = '';
  }
});

console.log(TaskListLink);

TaskListLink?.addEventListener("click", () => {
  TaskListElement?.classList.toggle("TaskList__list--hideCompleted");
  TaskListLink?.classList.toggle("TaskList__link--isActive");
});

darkThemeToggleElement.addEventListener("click", toggleDarkMode);

//1. `initializeTaskList`       // (Loads the initial list of tasks from storage when the page is loaded)
//2. `isTaskListEmpty`          // (Checks if the task list is empty)
//3. `showEmptyTaskMessage`    // (Displays a message or element indicating the task list is empty)
//4. `initializeFirstTask`     // (Adds the first task to storage and UI if the list is empty)
//5. `extractTaskName`        // (Extracts the task name from the input element)
//6. `calculateNextRepeat`   // (Calculates the next available repeat number for a new task)
//7. `saveTaskToStorage`    // (Saves a new task to local storage)
//8. `generateTaskHTML`         // (Generates HTML for a task to be added to the UI)
//9. `appendTaskToUI`        // (Adds task HTML to the UI)
//10. `addTaskCompletionListener`      // (Adds an event listener to toggle task completion status)
//11. `addTaskRemovalListener`      // (Adds an event listener to remove a task from UI and storage)
//12. `toggleTaskCompletion`  // (Toggles the completion status of a task and updates local storage)
//13. `deleteTaskFromStorage`  // (Removes a task from local storage)
