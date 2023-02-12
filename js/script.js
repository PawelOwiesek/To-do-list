{
  const tasks = [
    {
      content: "Zrobic sniadanie",
      done:false,
    },

    {
      content: "Zjesc kanapki",
      done:true,
    },

  ];

  const render=()=>{
    let htmlString="";

    for(const task of tasks){
      htmlString +=`
        <li>
           ${task.content}
        </li>
      `;
    }
    document.querySelector(".js-tasks").innerHTML=htmlString;
  }

  const init = () => {
    render();
  };

  init();

}
