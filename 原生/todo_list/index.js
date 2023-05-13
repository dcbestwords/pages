const doms = {
    form: document.getElementById('form'),
    input: document.getElementsByTagName('input')[0],
    todos: document.getElementsByClassName('todos')[0],
    todoLis: document.querySelectorAll('li')
}
const todos = JSON.parse(localStorage.getItem('todos'));
if (todos) {
    todos.forEach(todo => {
        addtodo(todo)
    });
}

doms.form.addEventListener('submit',function (e) {
    e.preventDefault()
    addtodo()
})

function addtodo(todo) {
    const todoText = doms.input.value;
    if (todo) {
        todoText = todo.text
    }
    if (todoText) {
        const liNode = document.createElement('li');
        if (todo && todo.completed) {
            liNode.classList.add('completed')
        }
        liNode.innerText = todoText;
        liNode.addEventListener('click',function(){
            this.classList.toggle('completed')
            updateLS()
        })
        liNode.addEventListener('contextmenu',function (e) {
            e.preventDefault();
            this.remove();
            updateLS()
        })
        doms.todos.appendChild(liNode)
        doms.input.value = ''
        updateLS()
    }
}

/**
 * 更新本地存储
 */
function updateLS() {
    const todos = []
    doms.todoLis.forEach((todoLi)=>{
        todos.push({
            text: todoLi.innerText,
            completed: todoLi.classList.contains('completed')
        })
    })
    localStorage.setItem('todos',JSON.stringify(todos))
}