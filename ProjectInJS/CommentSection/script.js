const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add task
function addTask() {
  const taskContent = taskInput.value.trim(); // Trim whitespace from input

  if (taskContent) {
    const newTask = document.createElement("li");
    newTask.textContent = taskContent;
    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear the input field
  }
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);
