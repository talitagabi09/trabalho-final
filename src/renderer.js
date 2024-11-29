// renderer.js
import { taskQueue, taskHistory } from "./taskmanager.js";

/**
 * Renderiza a fila de tarefas no DOM.
 */
export function renderQueue() {
  const queueList = document.getElementById("taskQueue");
  queueList.innerHTML = taskQueue
    .map((task) => `<li>${task.id} - ${task.desc} (${task.priority})</li>`)
    .join("");
}

/**
 * Renderiza o histórico de tarefas no DOM.
 */
export function renderHistory() {
  const historyList = document.getElementById("taskHistory");
  historyList.innerHTML = taskHistory
    .map((task) => `<li>${task.id} - ${task.desc} (${task.priority})</li>`)
    .join("");
}
