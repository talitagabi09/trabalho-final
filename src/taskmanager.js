// taskmanager.js

export let taskQueue = []; // Fila com prioridade
export let taskHistory = []; // Pilha de histórico

/**
 * Adiciona uma tarefa à fila com prioridade.
 * @param {number} id - ID da tarefa.
 * @param {string} desc - Descrição da tarefa.
 * @param {string} priority - Prioridade da tarefa ("alta", "media", "baixa").
 * @param {string} date - Data da tarefa.
 */
export function addTask(id, desc, priority, date) {
  const task = { id, desc, priority, date };

  if (priority === "alta") taskQueue.unshift(task);
  else if (priority === "media") taskQueue.splice(taskQueue.length / 2, 0, task);
  else taskQueue.push(task);
}

/**
 * Remove a tarefa da fila e adiciona ao histórico.
 */
export function removeTask() {
  const removed = taskQueue.shift();
  if (removed) taskHistory.push(removed);
}
