class Task {
    constructor(taskInput) {
        this.taskInput = taskInput;
    }
}

class UI {
    addTask(task) {
        const taskList = document.querySelector('.collection');

        // Create li element
        const li = document.createElement('li');
        // Add a class
        li.className = 'collection-item';
        // Create text node and append to the li
        li.appendChild(document.createTextNode(task.taskInput));
        // Create new cancel element 
        const cancel = document.createElement('a');
        // Add class
        cancel.className = 'delete-item secondary-content';
        // Add icon html
        cancel.innerHTML = '<i class = "fa fa-remove"</i>';
        // Append the cancels to li
        li.appendChild(cancel);

        // append li to ul
        taskList.appendChild(li);
    }

    removeTask(target) {
        if(target.parentElement.classList.contains('delete-item')) {

            if(confirm('Are you sure')){
                target.parentElement.parentElement.remove();
            }
        }

        
    
    }

    clearTasks() {
        if(confirm('Are you sure you want to clear all tasks')) {
            // taskList.innerHTML = '';
        
            // Faster method to clear all tasks
            while(taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
                
            }
            }
    }

   static filterTask(text) {
        document.querySelectorAll('.collection-item').forEach(function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }

}

// Local storage class
class Store {
    static getTaskToLs() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks
    }

    static addTaskToLs(task) {
        const tasks = Store.getTaskToLs();

        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static displayTaskFromLs() {
        const tasks = Store.getTaskToLs();

        tasks.forEach(function(task) {
            // Instantiate UI
            const ui = new UI();

            ui.addTask(task);
        })
    }

    static removeTaskFromLs(taskItem) {
        const tasks = Store.getTaskToLs();

        tasks.forEach(function(task, index){
            if(task.taskInput === taskItem) {
                tasks.splice(index, 1)
            }
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static clearAllTasksFromLs() {
        localStorage.clear();
    }
}

// Event to display tasks from local storage
document.addEventListener('DOMContentLoaded', Store.displayTaskFromLs);

// Event Listeners to add task
const form = document.getElementById('task-form');
form.addEventListener('submit', function(e) {
    // Get form values
    const taskInput = document.getElementById('task').value;

    // Instantiating Task
    const task = new Task(taskInput);

    // Instantiating UI
    const ui = new UI();

    // Validate
    if(taskInput === '') {
        alert('Add a task')
    } else {
        ui.addTask(task);
        Store.addTaskToLs(task);
        document.getElementById('task').value = '';
    }


    e.preventDefault();
});

// Event Listeners to remove task
const taskList = document.querySelector('.collection');
taskList.addEventListener('click', function(e) {
    // Instantiating UI
    const ui = new UI();

    // Method to Remove task
    ui.removeTask(e.target);

    // calling Remove from local storage method
    Store.removeTaskFromLs(e.target.parentElement.parentElement.textContent);

    e.preventDefault();
})

// Event Listener to clear tasks
const clearBtn = document.querySelector('.clear-task');
clearBtn.addEventListener('click', function() {
    // Instantiating UI
    const ui = new UI();
    // Method to clear task
    ui.clearTasks();
    // Calling the clear all tasks from LS method
    Store.clearAllTasksFromLs();
})

// Event listener to filter tasks
const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(e) {
    const text = e.target.value.toLowerCase();

    // Calling the filter task method
    UI.filterTask(text)
})
