// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  taskTitles.push(title);
  taskComplete.push(false);

  // Define the task object
  const task = {
    title: title,
    description: description,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };

  // Return the task object
  return task;
}

// Create two new tasks
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

// Mark the first task as complete and log its state
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed

// Log the array of task titles and completions
console.log(taskTitles);
console.log(taskComplete);

// Define a function to mark a task as complete in the array
function completeTask(taskIndex) {
  taskComplete[taskIndex] = true;
}

// Define a function to log the state of a task from the array
function logTaskState(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
}

// Mark the second task as complete and log its state
completeTask(1);
logTaskState(1); // Do Laundry has been completed

// Create two more tasks
const task3 = newTask("Wash Dishes", "🍽️");
const task4 = newTask("Buy Groceries", "🛒");

// Log the array of task titles and completions again
console.log(taskTitles);
console.log(taskComplete);

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
