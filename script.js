// script.js

// Run the code after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list to display tasks

    // Function to add a new task
    function addTask() {
        // Get the trimmed input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText; // Set the task text

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add click event to the "Remove" button to delete the task
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add "Enter" keypress event listener to the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
