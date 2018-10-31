

let taskList =""

document.addEventListener("DOMContentLoaded", () => {
  const domForm = document.getElementById("create-task-form");
  const domDescription = document.getElementById("new-task-description");
  const domPriority = document.getElementById("new-task-priority");
  const taskUl = document.getElementById("tasks");
  domForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createNewTask(domDescription.value);
  });

  function createNewTask(description){
    console.log("add")
    taskList = taskList + renderTask(description)
    taskUl.innerHTML = taskList
  }
  function renderTask(description) {
      return `
        <li>
          ${description}
          <button data-description="${description}">X</button>
        </li>
        `;
    }
  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      console.log("remove")
      ((e.toElement).parentElement).remove()
      taskList = taskUl.innerHTML
    }
  })


});
