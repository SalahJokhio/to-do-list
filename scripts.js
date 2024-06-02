document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const datetimeInput = document.getElementById('datetime-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, datetimeInput.value);
        taskInput.value = '';
        datetimeInput.value = '';
    });

    function addTask(task, datetime) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.textContent = `${task} - ${datetime}`;
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        setReminder(task, new Date(datetime));
    }

    function setReminder(task, datetime) {
        const now = new Date();
        const timeUntilReminder = datetime.getTime() - now.getTime();

        if (timeUntilReminder >= 0) {
            setTimeout(() => {
                alert(`Reminder: ${task}`);
            }, timeUntilReminder);
        }
    }
});
