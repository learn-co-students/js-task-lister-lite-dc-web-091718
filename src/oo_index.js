
document.addEventListener("DOMContentLoaded", () => {

  let form = document.getElementById("create-task-form")

  form.addEventListener("submit", () => {
    event.preventDefault();
    const taskText = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = taskText.value;
    document.getElementById("tasks").appendChild(newTask);
    event.target.reset()
  });

});
