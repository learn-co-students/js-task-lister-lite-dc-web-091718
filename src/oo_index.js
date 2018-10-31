const tasks = document.querySelector("#tasks")

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  // Listen for form submission
  document.getElementById('create-task-form').addEventListener("submit", (e) => {
    // Don't reload the page
    e.preventDefault();
    // Add the item to the correct area
    addItemToTodos(document.getElementById("new-task-description").value);
    // Reset the form
    e.target.reset();
  })
});


const addItemToTodos = function(itemName) {
  let str = `<li>${itemName}</li>`
  tasks.innerHTML += str
}