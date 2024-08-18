export function findFirstMissingRepeat(tasks) {
  const repeatNumbers = tasks.map((task) => task.repeat);

  const minNumber = 0;
  const maxNumber = Math.max(...repeatNumbers);

  for (let i = minNumber; i <= maxNumber; i++) {
    if (!repeatNumbers.includes(i)) {
      return i;
    }
  }

  return null;
}
