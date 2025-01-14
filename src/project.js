export default class Project {
    constructor(name, description, deadline, todos = [], isFinished = false) {
        this.name = name
        this.description = description
        this.deadline = deadline
        this.todos = todos
        this.isFinished = isFinished
    }
    addTodo(todo) {
        this.todos.unshift(todo)
    }
    finish() {
        this.isFinished = true
        this.todos.forEach(todo => todo.finish())
    }
    removeTodo(todoIndex) {
        this.todos.splice(todoIndex, 1)
    }
    changeTodoOrder(todoIndex, newIndex) {
        let todo = this.todos.at(todoIndex)
        this.todos.splice(todoIndex, 1)
        this.todos.splice(newIndex, 0, todo)
    }
}