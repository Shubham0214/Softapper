function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    
    if (task === '') {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    
    // Add checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    li.appendChild(checkbox);

    // Add delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.setAttribute("onclick", "deleteTask(this)");
    li.appendChild(deleteBtn);

    ul.appendChild(li);

    input.value = "";
}

function deleteTask(btn) {
    var li = btn.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
