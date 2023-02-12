{
  const tasks = [
    {
      content: "Zrobic sniadanie",
      done: false,
    },

    {
      content: "Zjesc kanapki",
      done: true,
    },

  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    })
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
      return;
    };

    addNewTask(newTaskContent)

  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          
        <li
           class="tasksList__item ${task.done ? "list__item--done" : ""}"
        > 
           <button class="tasks__list--buttonDone js-done">✔</button>
           ${task.content}
           <button class="tasks__list--buttonRemove js-remove">🗑</button>
        </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });

  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();

}
