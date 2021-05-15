/* Checlist for the project:
- add funtion
- delete function
- modify function
- mark/unmark completed task 
*/

let toDoList = [];
let toDoInput = "";

let idCounter = 0;

/*let itemList = {
  task: toDoInput,
  /*id: counterUpdate(idCounter),*/
/*id: idCounter,
  done: false
};*/

let addToDoListItem = (task) => {
  toDoList.push({ id: idCounter++, task: task, done: false });
};

//update HTML function
const updateHTML = () => {
  let htmlTasks = toDoList
    .map((item, i) => {
      return `<li id="${item.id}">
      <input ${item.done && "checked"} type ="checkbox" class="check" id="${
        item.id
      }" />
      ${item.done ? `<strike>${item.task}</strike>` : item.task}
      <button class="delete-item" id="${item.id}">&#128465;</button>
      </li>`;
    })
    .join("");

  document.querySelector("ul").innerHTML = htmlTasks;

  //checkbox marked

  const checkButtons = document.querySelectorAll(".check");
  checkButtons.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      /*crossItem(parseInt(event.target.id));*/
      console.log(toDoList);
      console.log(event.target.id);
      toDoList = toDoList.map((item) => {
        return item.id === parseInt(event.target.id)
          ? { id: item.id, task: item.task, done: !item.done }
          : item;
      });
      updateHTML();
    })
  );

  const deleteButtons = document.querySelectorAll(".delete-item");
  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      deleteItem(parseInt(event.target.id));
      updateHTML();
    })
  );
};

//adding user input to the list
let addTaskButton = document.querySelector("#addNewTask");

addTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  let text = document.querySelector("#user-input");

  // when Enter is pressed on the keybord the task is added to the list
  document
    .querySelector("#addNewTask")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addToDoListItem(text.value);
      }
    });

  if (text.value === "") {
    let popup = `<h1>you didn't type anything :( </h1>`;
    document.querySelector("#popup").innerHTML = popup;
    updateHTML();
  } else {
    addToDoListItem(text.value);
    text.value = "";
    updateHTML();
  }
});

//Delete user input to the list
//let deleteTaskButton = document.querySelectorAll(".delete-item");
/*console.log(deleteTaskButton);*/

/*deleteTaskButton.forEach((btn) => {
  btn.addEventListener("click", () => {*/
/*console.log(typeof parseInt(event.target.id));
    alert("hello");
    /*console.log(parseInt(event.target.item.id));
    deleteItem(parseInt(event.target.item.id));
    console.log(event.target.item.id);
    deleteItem(event.target.item.id);
    updateHTML();
    console.log(toDoList);
  });
});*/

/*const deleteButtons = document.querSelectorAll(".delete-item");
      deleteButtons.forEach((btn) =>
        btn.addEventListener("click", (event) => {
          console.log(typeof parseInt(event.target.id));
          removeItem(parseInt(event.target.id));
          updateHTML();
        })
      );
    };*/

let deleteItem = (id) => {
  toDoList = toDoList.filter((item) => item.id !== parseInt(id));
  /*console.log(id, toDoList);*/
};

let crossItem = (id) => {
  /*toDoList = toDoList.filter((item) => item.id !== parseInt(id));*/
  /*console.log(id, toDoList);*/
};

/*const removeItem = (id) => (tasks = tasks.filter((task) => task.id !== id));*/

// REPLACE ONE THING
function updateTodoListItem(id, newText) {
  const index = toDoList.findIndex((item) => {
    return item.id === id;
  });
  toDoList.splice(index, 1, { id: id, text: newText, done: true });
}

/*addToDoListItem("clean bathroom");
addToDoListItem("finish phd");
addToDoListItem("watch TV");
addToDoListItem("finish JavaScript project");
addToDoListItem("finish JavaScript project");
addToDoListItem("finish JavaScript project");
addToDoListItem("finish JavaScript project");
addToDoListItem("finish JavaScript project");
addToDoListItem("watch TV");
addToDoListItem("Drink a glass of wine !!");*/

/*deleteItem(3);
deleteItem(7);
deleteItem(5);*/
/*console.log(toDoList);*/
