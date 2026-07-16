function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText) {
    let li = document.createElement("li");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
      li.classList.toggle("completed", checkbox.checked);
    };

    // Task text
    let span = document.createElement("span");
    span.textContent = taskText;

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}
