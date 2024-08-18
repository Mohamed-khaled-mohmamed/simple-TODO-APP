export function toggleTaskCompletion(taskElement) {
  const taskName = taskElement.textContent.trim();
  let tasks = JSON.parse(localStorage.getItem('allTasks')) || [];
  let repeatNum = parseInt(taskElement.getAttribute('data-repeat'));

  tasks.forEach((taskItem) => {
    if (taskItem.repeat === repeatNum && taskItem.taskName === taskName) {
      taskItem.isActive = taskElement.classList.toggle('TaskList__taskContent--isActive') ? 'Active' : '';
    }
  });

  localStorage.setItem('allTasks', JSON.stringify(tasks));
}
