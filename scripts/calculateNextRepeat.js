import { findFirstMissingRepeat } from "./findFirstMissingRepeat.js";

export const calculateNextRepeat = function (taskName) {
  if (taskName.trim() === '') {
    return;
  }

  let allTasks = localStorage.getItem('allTasks');
  let parsedTasks = JSON.parse(allTasks);
  const missingRepeat = findFirstMissingRepeat(parsedTasks);

  if (missingRepeat !== null) {
    return missingRepeat;
  } else {
    return parsedTasks.length;
  }
};
