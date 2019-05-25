const listName = document.querySelector('p.listName');
const inputListName = document.querySelector('input.inputListName');
const btnListName = document.querySelector('button.btnListName');
const inputAdd = document.querySelector('input.inputAdd');
const btnAdd = document.querySelector('button.btnAdd');

// Change List Name
function changeListName() {
    const value = inputListName.value;
    if (value.length > 0) {
        listName.innerHTML = value + ":";
    }
}

btnListName.addEventListener('click', () => {
    changeListName();
});

inputListName.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        changeListName();
    }
});

// Add Items to list
function addItem() {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    const value = inputAdd.value;
    if (value.length > 0) {
        li.textContent = value;
        ul.appendChild(li);
        inputAdd.value = '';
    }
}

btnAdd.addEventListener('click', () => {
    addItem();
});

inputAdd.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        addItem();
    }
});