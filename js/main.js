const listName = document.querySelector('p.listName');
const inputListName = document.querySelector('input.inputListName');
const btnListName = document.querySelector('button.btnListName');

// Change List Name
function changeListName() {
    const nameValue = inputListName.value;
    if (nameValue.length > 0) {
        listName.innerHTML = nameValue + ":";
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



