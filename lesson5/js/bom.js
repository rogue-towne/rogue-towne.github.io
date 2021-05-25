const list = document.querySelector('.list')
const input = document.querySelector('#favchap')
const button = document.querySelector('button')

button.addEventListener("click", () => {
    let li = document.createElement('li');
    li.textContent = input.value;
    const deleteButton = document.createElement('button')
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener("click", () =>{list.removeChild(li);
        input.focus();})

    input.value = ''
})