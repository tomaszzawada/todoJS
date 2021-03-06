const listName = document.querySelector("p.listName");
const inputListName = document.querySelector("input.inputListName");
const btnListName = document.querySelector("button.btnListName");
const inputAdd = document.querySelector("input.inputAdd");
const btnAdd = document.querySelector("button.btnAdd");
const listDiv = document.querySelector(".list");
const listUl = document.querySelector(".ulList");
const liSpan = listUl.getElementsByTagName("span");

// Traverse Items
listUl.addEventListener("click", e => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.className == "remove") {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if (e.target.className == "up") {
      let li = e.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    } else if (e.target.className == "down") {
      let li = e.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

// Edit Spans
listDiv.addEventListener("click", e => {
  if (e.target.tagName == "SPAN") {
    let input = document.createElement("input");
    let span = e.target;
    let text = span.textContent;
    const li = span.parentNode;
    console.log(text);
    span.style.display = "none";
    input.value = text;
    input.className = "liInput";
    li.insertAdjacentElement("afterbegin", input);
    input.focus();

    document.addEventListener("click", e => {
      const noEvent = '.liSpan, .nameSpan, .liInput';
      if (!e.target.matches(noEvent)) {
        span.textContent = input.value;
        span.style.display = "inline";
        input.remove();
      }
    });

    input.addEventListener("keyup", e => {
      if(e.keyCode == 13) {
        span.textContent = input.value;
        span.style.display = "inline";
        input.remove();
      }
    });
  }
});

// Change List Name
function changeListName() {
  let value = inputListName.value;
  if (value.length > 0) {
    listName.innerHTML = value + ":";
    inputListName.value = "";
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
  let up = document.createElement("button");
  let down = document.createElement("button");
  let remove = document.createElement("button");
  up.className = "up";
  down.className = "down";
  up.textContent = "\u2BC5";
  down.textContent = "\u2BC6";
  remove.className = "remove";
  remove.textContent = "x";
  li.appendChild(up);
  li.appendChild(down);
  li.appendChild(remove);
}

for (let i = 0; i < listUl.children.length; i += 1) {
  addLiBtn(listUl.children[i]);
}

// Add Items to list
function addItem() {
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  let value = inputAdd.value;
  if (value.length > 0) {
    li.innerHTML = `<span class="liSpan">${value}</span>`;
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
