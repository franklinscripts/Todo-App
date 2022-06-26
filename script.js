const form  = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')
const subBtn  = document.getElementById('save')
subBtn.addEventListener('click',(f) => {
    f.preventDefault();

    const todoText = input.value;

    if (todoText){
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;
        todos.appendChild(todoEl)
        input.value = '';
        todoEl.addEventListener('click', () =>{
            todoEl.classList.toggle('completed')
        });
        todoEl.addEventListener('contextmenu',(e) =>{
            e.preventDefault()
            todoEl.remove()
        });
    }
    if (input == " " && input == 0){
        
        subBtn.style.display = 'none'
    }
});
