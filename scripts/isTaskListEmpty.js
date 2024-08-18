export const isTaskListEmpty = function () {
  let allTasks = localStorage.getItem('allTasks');
  let parsedTasks = JSON.parse(allTasks);

  return !parsedTasks || parsedTasks.length === 0;
};
