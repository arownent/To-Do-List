document.getElementById("addTaskButton").addEventListener("click", function(){
    addTask();
});

function addTask(){
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    if (taskInput.value !== "") {
        var li = document.createElement("li");
        var taskText = document.createElement("span");
        taskText.appendChild(document.createTextNode(taskInput.value));
        var lineBreak = document.createElement("br");
        var dateTime = document.createElement("span");
        var currentDateTime = new Date();
        var formattedDateTime = `${currentDateTime.toLocaleDateString()} ${currentDateTime.toLocaleTimeString()}`
        dateTime.appendChild(document.createTextNode(formattedDateTime));
        var deleteButton = document.createElement("button");
        deleteButton.className = "deletebutton"
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.onclick = function(){
            taskList.removeChild(li);

        };
        li.appendChild(taskText);
        li.appendChild(lineBreak);
        li.appendChild(dateTime);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}