export default class Project {
    constructor(name, description, deadline, todos = []) {
        this.name = name
        this.description = description
        this.deadline = deadline
        this.todos = todos
    }
    addTodo(todo) {
        this.todos.push(todo)
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