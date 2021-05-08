/* Checlist for the project:
- add funtion
- delete function
- modify function
- mark/unmark completed task 
*/

let toDoList = [];
/*let toDoInput = "";*/

/* let itemList = {
  task: toDoInput,
  id: toDoList.length,
  done: false
}; */

/*let idCounter = 0;
let counterUpdate = (item) => {
  toDoList.map((item) => (item.id = idCounter++));
  return idCounter;
};

console.log(counterUpdate(idCounter));*/

/*console.log(counterupdate("this ..." + idCounter));*/

let addToDoListItem = (task, idCounter) => {
  toDoList.push({ id: toDoList.length, task: task, done: false });
};

addToDoListItem("clean bathroom");
addToDoListItem("finish phd");
addToDoListItem("watch TV");
addToDoListItem("finish JavaScript project");

let deleteItem = (id) => {
  toDoList = toDoList.filter((item) => item.id !== parseInt(id));
  console.log(id, toDoList);
};

deleteItem(3);

console.log(toDoList);

// REPLACE ONE THING
function updateTodoListItem(id, newText) {
    const index = toDoList.findIndex((item) => {
    return item.id === id;
  });
  toDoList.splice(index, 1, { id: id, text: newText, vegetable: true });
}

updateTodoListItem(3, "not asparagus");
