// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Add a new task and optionally save it to Local Storage
    function addTask(taskText, save = true) {
        // Trim the task text
        taskText = taskText.trim();

        // Check if the task text is empty
        if (taskText === '') {
            if (save) alert('Please enter a valid task.');
            return;
        }

        // Create a new list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Attach an event listener to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove from the DOM
            removeTaskFromStorage(taskText); // Remove from Local Storage
        };

        // Append the button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Save the task to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Filter out the task
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update Local Storage
    }

    // Add event listeners
    addButton.addEventListener('click', () => addTask(taskInput.value));
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks when the page is ready
    loadTasks();
});
