const btnAdd = document.getElementById('btn-add');
const input = document.getElementsByClassName('input')[0];
const btnDeleteall = document.querySelector('.btn-deleteall')
const unorderedList = document.getElementById('unordered-list');
let listarr = [];

function btnAddClick() {
    const inputText = input.value.trim();
    const inputTextLower = inputText.toLowerCase();
    if(!inputTextLower || inputTextLower.length > 40) {
        input.style.borderColor = 'red';
        input.value = ''
        input.placeholder = !inputTextLower ? 'You need to Type Something..' : 'maximum length of characters is 40'
        setTimeout(changeInputPlaceholder, 1000)
        return;
    } 

    if(!listarr.includes(inputTextLower)) {
        const liTag = document.createElement('li');
        const btnRemove = document.createElement('span');
        listarr.push(inputTextLower);
        liTag.className = 'list-item';
        liTag.innerHTML = inputText;
        btnRemove.innerHTML = 'x'
        btnRemove.className = 'btn-remove';
        unorderedList.append(liTag);
        liTag.append(btnRemove);
        input.style.borderColor = 'lightgreen'
        input.placeholder = `"${inputText}" is added to the list`
        input.value = ''
        btnDeleteall.style.visibility = 'visible';

    } else {
       input.style.borderColor = 'red';
       input.placeholder = `"${inputTextLower}" is already in the list`;
       input.value = ''
    }
    setTimeout(changeInputPlaceholder, 1000);
};

function btnRemoveClick() {
    if(event.target.className === 'btn-remove') {
        const text = event.target.innerHTML;
        event.target.parentElement.remove();
        listarr.splice(listarr.indexOf(text),1 )
    } else{
            event.target.classList.toggle('selected')
        }
}

function enterKeyClick() {
    if(event.key === 'Enter') {
        btnAddClick();
    }
}

function btnRemoveAllClick() {
    listarr = []
    unorderedList.textContent = '';
    btnDeleteall.style.visibility = 'hidden'
    input.placeholder = 'all deleted..'
    input.style.borderColor = 'green'
    setTimeout(changeInputPlaceholder, 1000);
}

function changeInputPlaceholder() {
    input.style.borderColor = 'black'
    input.placeholder = 'type something..'
}

btnAdd.addEventListener('click', btnAddClick);
unorderedList.addEventListener('click', btnRemoveClick);
document.body.addEventListener('keypress', enterKeyClick);
btnDeleteall.addEventListener('click', btnRemoveAllClick)