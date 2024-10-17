const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('TaskList');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener("click", addTask);

function addTask () {
    const taskText = taskInput.value; 
    if (!taskText) return;

};

const listItems = document.createElement('li');

const checkBox = document.createElement(input);
checkBox.type = 'checkbox';
checkBox.taskList.add('checkbox');

const deleteButton = document.createElement('button')
deleteButton.textContent = 'delete' ;
checkBox.taskList.add('delete-btn');

deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
});




taskItem.appendChild(checkBox);
taskItem.appendChild(deleteButton);

taskList.appendChild(taskItem);




    
