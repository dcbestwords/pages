<template>
    <div class="container">
        <h1>todos</h1>
        <form id="form" @submit="handleSubmit($event)">
            <input type="text" placeholder="Enter your todo" v-model="todoText">
            <ul class="todos">
                <li v-for="(todo, index) in todos" 
                :key="index" 
                :class="{ completed: todo.completed }"
                @click="handleClick($event)"
                @contextmenu="handleMenu($event,index)"
                >
                    {{ todo.text }}
                </li>
            </ul>
        </form>
        <small>
            Left click to toggle completed.
            <br>
            Right click to delete todo
        </small>
    </div>
</template>

<script>
export default {
    name: 'Todos',
    data() {
        return {
            todoText: '',
            todos: []
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.todoText) {
                this.addtodo(this.todoText);
                this.todoText = ''
            }
        },
        handleClick(e){
            console.log(e.target.classList);
            e.target.classList.toggle('completed')
        },
        handleMenu(e,index){
            e.preventDefault();
            this.todos.splice(index,1)
            localStorage.setItem('todos',JSON.stringify(this.todos))
        },
        addtodo(todoText) {
            this.todos.push({
                text: todoText,
                completed: false
            })
            localStorage.setItem('todos',JSON.stringify(this.todos))
        }
    },
    created() {
        const todos_exist = JSON.parse(localStorage.getItem('todos'))
        if (todos_exist) {
            this.todos = todos_exist
        }
    },
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    background-color: #f5f5f5;
    color: #444;
    height: 100vh;
    font-family: 'Poppins', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 160px;
        color: #dbc7ed;
    }

    #form {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        width: 400px;

        input {
            border: none;
            font-size: 40px;
            padding: 10px 20px;
            width: 100%;

            &::placeholder {
                color: #d5d5d5;
            }

            &:focus {
                outline-color: rgb(179, 131, 226);
            }
        }

        .todos {
            background-color: #fff;
            list-style-type: none;

            li {
                cursor: pointer;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                padding: 10px 20px;
                font-size: 35px;

                &.completed {
                    color: #b6b6b6;
                    text-decoration: line-through;
                }
            }
        }
    }

    small {
        margin-top: 40px;
        color: #b5b5b5;
        text-align: center;
    }
}
</style>