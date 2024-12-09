import { pubSub } from "./index"

export default class Todo {
    constructor(description, priority) {
        this.description = description
        this.priority = priority
        this.completed = false
    }
    markAsCompleted() {
        this.completed = true
    }
    editDescription(newDescription) {
        this.description = newDescription
    }
    editPriority(newPriority) {
        this.priority = newPriority
    }
}