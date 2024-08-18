export const generateTaskHTML = function (taskName, isActive = false, uniqueNumber = 0) {
  if (taskName.trim() === '') return;

  let activeClass = isActive ? 'TaskList__taskContent--isActive' : '';

  let taskHTML = `
    <li class="TaskList__taskContent ${activeClass}" data-repeat="${uniqueNumber}">
      <div class='TaskList__checkbox' tabindex="0" role="button">
        <img class='TaskList__checkboxImg' src="./assets/icon-checkmark.svg" alt="checkmark" />
      </div>
      <div class='TaskList__valueContent'>
        <p class='TaskList__value'>
          ${taskName}
        </p>
        <img src="./assets/icon-basket.svg"
             class='TaskList__deleteIcon'
             alt="basket-icon"
        />
      </div>
    </li>`;
  return taskHTML;
};
