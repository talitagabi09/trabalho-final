// main.js
import { addTask, removeTask } from "./taskmanager.js";
import { renderQueue, renderHistory } from "./renderer.js";

// Função para configurar os eventos do formulário
function setupForm() {
  const taskForm = document.getElementById("taskForm");
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = parseInt(document.getElementById("taskId").value);
    const desc = document.getElementById("taskDesc").value;
    const priority = document.getElementById("taskPriority").value;
    const date = document.getElementById("taskDate").value;

    addTask(id, desc, priority, date);
    renderQueue();
  });
}

// Função para configurar o botão de remoção
function setupRemoveButton() {
  const removeButton = document.getElementById("removeTask");
  removeButton.addEventListener("click", function () {
    removeTask();
    renderQueue();
    renderHistory();
  });
}

// Inicialização do sistema
function init() {
  setupForm();
  setupRemoveButton();
}

document.addEventListener("DOMContentLoaded", init);
