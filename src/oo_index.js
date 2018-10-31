
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();


  // Add an event listener for form submission
  document.getElementById('create-task-form').addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.create(document.getElementById("new-task-description").value);
  })
});
