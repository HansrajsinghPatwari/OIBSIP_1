const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    const taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);
    const deleteBtn = document.createElement("button");
    const deleteText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteText);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);      
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
