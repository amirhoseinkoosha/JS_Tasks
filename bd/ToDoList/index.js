// window.addEventListener("load",);
const button = document.querySelector(".button");
const taskinput = document.querySelector(".taskinput");
const tasks = document.querySelector(".tasks");
const P = document.querySelectorAll("P");

if (!(localStorage.length == 0)) {
  setlocaldata(GetData());
}

taskinput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    AddingTask();
  }
});

button.addEventListener("click", () => {
  AddingTask();
});
// adding task
function AddingTask() {
  let value = taskinput.value;
  if (value !== "") {
    let task = CreateElement(value);
    taskinput.value = "";
    tasks.appendChild(task);
    localStorage.setItem(`task ${localStorage.length + 1}`, `${value}`);
    task.innerHTML += `<i class="fa-solid fa-trash"></i>`;
  } else alert("Fill out the form");
  if (tasks.childElementCount > 5) {
    tasks.style.overflow = "scroll";
  }
}
//create element
function CreateElement(text) {
  const Element = document.createElement("p");
  Element.textContent = text;
  return Element;
}
//delete task
tasks.addEventListener("click", (e) => {
  var target = e.target;
  if (target.className == "fa-solid fa-trash") {
    target.parentElement.remove();
    var text = target.parentElement.textContent;
    localStorage.removeItem(findtext(text));
  }
  if (tasks.childElementCount < 6) {
    tasks.style.overflow = "hidden";
  }

  if (target.nodeName == "P") {
    target.classList.toggle("checked");
  }
});
//get data from local storage and return as a array
function GetData() {
  var local = localStorage;
  var result = Object.entries(local);
  return result;
}
//find the data that selected to delete from localstorage
function findtext(text) {
  var key;
  var datas = GetData();
  for (i = 0; i < datas.length; i++) {
    if (datas[i][1] == text) {
      key = localStorage.key(i);
      return key;
    }
  }
}
//update tasks with local storage
function setlocaldata(d) {
  for (i = 0; i < d.length; i++) {
    if (!(d[i][1] == "" || d[i][1] == null)) {
      let task = CreateElement(d[i][1]);
      tasks.appendChild(task);
      task.innerHTML += `<i class="fa-solid fa-trash"></i>`;
    }
  }
}
