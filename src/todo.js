import { pubSub } from "./index"

export default class Todo {
    constructor(description, priority, completed = false) {
        this.description = description
        this.priority = priority
        this.completed = completed
    }
    static create(values) {
        const todo = new Todo(values.description, values.priority)
        let projects = pubSub.emit("getProjects")
        let project = projects.find(project => project.name == values.project)
        project.addTodo(todo)
        pubSub.emit("renderTodo", {todo: todo})
        pubSub.emit("projectChange")
        return todo
    }
    markAsCompleted() {
        this.completed = true
        pubSub.emit("projectChange")
    }
    destroy(project) {
        const todoIndex = project.todos.indexOf(this)
        project.todos.splice(todoIndex, 1)
        pubSub.emit("projectChange")
    }
    editDescription(newDescription) {
        this.description = newDescription
    }
    editPriority(newPriority) {
        this.priority = newPriority
    }
    static restore(values) {
        return new Todo(values.description, values.priority, values.completed)
    }
    static createSubscriptions() {
        pubSub.on("restoreTodo", this.restore)
        pubSub.on("createTodo", this.create)
    }
}