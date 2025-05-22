const TodoList = [
  {
    id: 1,
    title: "was doen",
  },
  {
    id: 2,
    title: "studeren",
  },
  {
    id: 3,
    title: "eten",
  },
];
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const filterWinkels = document.getElementById("filter");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

TodoList.forEach((toDo) => {
  const selectItem = document.createElement("li");
  selectItem.value = toDo.id;
  selectItem.innerHTML = toDo.title;
  selectItem.addEventListener("click", function () {
    selectItem.classList.toggle("completed");
  });
  list.appendChild(selectItem);
});

// TodoList.forEach((toDo) => {
//   const selectItem = document.createElement("li");
//   selectItem.value = toDo.id;
//   selectItem.innerHTML = toDo.title;
//   selectItem.addEventListener("click", function () {
//     selectItem.classList.toggle("completed");
//   });
//   list.appendChild(selectItem);
//   if (text == "") {
//     const li = document.createElement("li");
//     li.textContent = text;
//     li.addEventListener("click", function () {
//       li.classList.toggle("completed");
//     });
//     list.appendChild(li);
//     input.value = "";
//   }
// });
