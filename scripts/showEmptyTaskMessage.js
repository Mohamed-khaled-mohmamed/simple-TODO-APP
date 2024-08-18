import { appendTaskToUI } from "./appendTaskToUI.js";

export function showEmptyTaskMessage() {
  let emptyListHTML = `
      <li class='EmptyList'>
        <img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
        <p>قائمة المهام فارغة</p>
      </li>`;
  appendTaskToUI(emptyListHTML);
}
