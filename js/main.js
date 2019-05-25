const listName = document.querySelector("p.listName");
const inputListName = document.querySelector("input.inputListName");
const btnListName = document.querySelector("button.btnListName");
const inputAdd = document.querySelector("input.inputAdd");
const btnAdd = document.querySelector("button.btnAdd");
const listDiv = document.querySelector(".list");
const listUl = document.querySelector(".ulList");

// Removing Item from List
listUl.addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.className == "remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  }
});

// Change List Name
function changeListName() {
  const value = inputListName.value;
  if (value.length > 0) {
    listName.innerHTML = value + ":";
  }
}

btnListName.addEventListener("click", () => {
  changeListName();
});

inputListName.addEventListener("keyup", e => {
  if (e.keyCode == 13) {
    changeListName();
  }
});

// Add remove button to list items
function addLiBtn(li) {
  let remove = document.createElement("button");
  remove.className = "remove";
  remove.textContent = "x";
  li.appendChild(remove);
}

for (let i = 0; i < listUl.children.length; i += 1) {
  addLiBtn(listUl.children[i]);
}

// Add Items to list
function addItem() {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  const value = inputAdd.value;
  if (value.length > 0) {
    li.textContent = value;
    addLiBtn(li);
    ul.appendChild(li);
    inputAdd.value = "";
  }
}

btnAdd.addEventListener("click", () => {
  addItem();
});

inputAdd.addEventListener("keyup", e => {
  if (e.keyCode == 13) {
    addItem();
  }
});
