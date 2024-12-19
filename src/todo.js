import { pubSub } from "./index"

export default class Todo {
    constructor(description, priority, completed = false) {
        this.description = description
        this.priority = priority
        this.completed = completed
    }
    markAsCompleted() {
        this.completed = true
        pubSub.emit("projectChange")
    }
    editDescription(newDescription) {
        this.description = newDescription
    }
    editPriority(newPriority) {
        this.priority = newPriority
    }
    static restoreTodo(values) {
        return new Todo(values.description, values.priority, values.completed)
    }
    static createSubscriptions() {
        pubSub.on("restoreTodo", this.restoreTodo)
    }
}