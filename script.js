function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <strong>${task}</strong>
        <div class="time">
            Added: ${new Date().toLocaleString()}
        </div>

        <button class="complete" onclick="completeTask(this)">Complete</button>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("pendingList").appendChild(li);

    input.value = "";
}

function completeTask(btn){

    let li = btn.parentElement;

    btn.remove();

    let completedTime = document.createElement("div");
    completedTime.className = "time";
    completedTime.innerHTML =
        "Completed: " + new Date().toLocaleString();

    li.appendChild(completedTime);

    document.getElementById("completedList").appendChild(li);
}

function editTask(btn){

    let li = btn.parentElement;

    let task = li.querySelector("strong");

    let newTask = prompt("Edit task:", task.innerText);

    if(newTask){
        task.innerText = newTask;
    }
}

function deleteTask(btn){
    btn.parentElement.remove();
}