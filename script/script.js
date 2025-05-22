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
  const selectItem = document.createElement("option");
  selectItem.value = toDo.id;
  selectItem.innerHTML = toDo.title;
  list.appendChild(selectItem);
});

const dropdown = document.querySelector("#winkels");

dropdown.addEventListener("change", () => {
  document.body.style.backgroundColor = dropdown.value;
});

function showTaken(TodoList, htmlElement) {
  htmlElement.innerHTML = "";
  TodoList.forEach((user) => {
    let newToDo = document.createElement("li");
    newToDo.innerHTML = user.title;
    if (TaakGedaan(title)) {
      newToDo.classList.add("dubbelUser");
    }
    htmlElement.appendChild(newUserLi);
  });
}
