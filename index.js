let toDoInput = "";

let addToDoListItem = (task) => {
  toDoList.push({ id: idCounter++, task: task, done: false });
};

let deleteItem = (id) => {
  toDoList = toDoList.filter((item) => item.id !== parseInt(id));
};

let toDoList = JSON.parse(localStorage.getItem('textinput')) || [];
console.log(toDoList);
let idCounter = toDoList.length;

//update HTML function
const updateHTML = () => {
  let htmlTasks = toDoList.map((item, i) => {
      return `<li id="${item.id}">
      <input ${item.done && "checked"} type ="checkbox" class="check" id="${item.id
        }" />
      ${item.done ? `<strike>${item.task}</strike>` : item.task}
      <button class="delete-item" id="${item.id}">&#10006;</button>
      </li>`;
    })
    .join(""); 

  document.querySelector("ul").innerHTML = htmlTasks;
  // add section
  
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
      saveToLocalStorage();
    })
  );

  const deleteButtons = document.querySelectorAll(".delete-item");

  deleteButtons.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      deleteItem(parseInt(event.target.id));
      updateHTML();
      saveToLocalStorage();
    })
  );
  console.log(toDoList);
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
    document.getElementById("user-input").placeholder = "type something .. ";
    updateHTML();
  } else {
    addToDoListItem(text.value);
    text.value = "";
    updateHTML();
  }
});
updateHTML();


const storageInput = document.querySelector('.storage')
const addButton = document.querySelector('.storage-button')
     /*document.querySelector("ul").innerHTML = toDoList
      .map((i) => `<input ${i.done && "checked"} type ="checkbox" class="check" id="${i.id
        }" />
      ${i.done ? `<strike>${i.task}</strike>` : i.task}
      <button class="delete-item" id="${i.id}">&#10006;</button>
      </li>`)
      .join(""); */


  storageInput.addEventListener('input', letter => {
    text = letter.target.value
    console.log(text)
  })

  const saveToLocalStorage = () => {
    localStorage.setItem('textinput', JSON.stringify(toDoList)); 
  }
  addButton.addEventListener('click', saveToLocalStorage)


// REPLACE ONE THING
function updateTodoListItem(id, newText) {
  const index = toDoList.findIndex((item) => {
    return item.id === id;
  });
  toDoList.splice(index, 1, { id: id, text: newText, done: true });
}
