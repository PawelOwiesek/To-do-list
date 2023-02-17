{
  let tasks = [];
  let hideDoneTasks=false;
  
  const addNewTask = (newTaskContent) => {
    tasks = [
      ...tasks,
      { content: newTaskContent, }
    ]
    render();
  };

  const removeTask = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1),
    ]
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], done: !tasks[taskIndex].done },
      ...tasks.slice(taskIndex + 1),
    ]

    render();
  };
  const markAllTasksDone=()=>{
    tasks=tasks.map((task)=>({
      ...task,
      done:true
    }));
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
  };


  const renderTasks = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          
        <li
           class="tasksList__item "
        > 
           <button class=" tasks__list--buttonDone js-toggleDone">
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
  };

  const bindButtonsEvents = () => {
    const markAllDoneButton = document.querySelector(".js-markAllDoneButton");
    const hideAllDoneButton = document.querySelector(".js-hideAllDoneButton");

    if (tasks.length === 0) {
      return;
    };
    markAllDoneButton.addEventListener("click",(markAllTasksDone))
  };

  const renderButtons = () => {
    let buttonsElements = document.querySelector(".js-buttons");
    buttonsElements.innerHTML === "";
    if (!tasks.length) {
      return;
    };

    buttonsElements.innerHTML = `
      
      <button class="task__buttons js-markAllDoneButton">Mark all done</button>
      <button class="task__buttons js-hideAllDoneButton">Hide all done</button>
      `


  };

  const render = () => {
    renderTasks();

    bindRemoveEvents();
    renderButtons();
    toggleDoneEvents();
    bindButtonsEvents();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();

}
