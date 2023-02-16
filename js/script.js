{
  let tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks=[
      ...tasks,
      {content: newTaskContent,}
    ]
    render();
  };

  const removeTask = (taskIndex) => {
    tasks=[
      ...tasks.slice(0,taskIndex),
      ...tasks.slice(taskIndex+1),
    ]
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    const clear = document.querySelector(".js-clear")
    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      clear.value = "";
    };
    clear.focus();
  };

  const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const toggleDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          
        <li
           class="tasksList__item "
        > 
           <button class="tasks__list--buttonDone js-toggleDone">
                ${task.done ? "✔" : ""}
           </button>
           <span class= "${task.done ? "list__item--done" : ""}">
                ${task.content} </span>
           <button class="tasks__list--buttonRemove js-remove">🗑
           </button>
        </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindRemoveEvents();

    toggleDoneEvents();

  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();

}
