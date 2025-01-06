import DomManager from "./dom";
import { pubSub } from "./index"

export default class todoDom extends DomManager {
    constructor(todo, project, storage) {
        super()
        this.todo = todo
        this.project = project
        this.storage = storage
        this.todosDiv = document.querySelector("#todos")
        this.template = document.querySelector("#todo-template").content.cloneNode(true)
        this.todoElem = null
        this.render()
    }
    create() {
        super.setTextContent(this.template, ".todo-description", this.todo.description)
        this.template.querySelector(".todo").classList.add(`${this.todo.priority}-priority`)
        this.template.querySelector("div.todo").dataset.todoDescription = this.todo.description
        this.template.querySelector("#todo-complete").addEventListener("click", (e) => this.markasCompleted(e))
        this.template.querySelector("#todo-delete").addEventListener("click", (e) => this.destroy())
        this.todoElem = this.template.querySelector("div")
        if (this.todo.completed) { this.markasCompleted() }
        return this.template
    }
    markasCompleted() {
        this.todo.markAsCompleted()
        this.todoElem.classList.add("completed-todo")
        this.todoElem.querySelector("#todo-complete").remove()
        this.todoElem.querySelector("#todo-delete").remove()
        this.storage.saveProject(this.project.name, this.project)
    }
    destroy() {
        this.todo.destroy(this.project)
        this.todoElem.remove()
        this.storage.saveProject(this.project.name, this.project)
    }
    render() {
        let todoElem = this.create()
        this.todosDiv.appendChild(todoElem)
    }
    static filterTodos(todos, priority, completion) {
        if (priority == "all") { priority = ["high","normal","low"] }
        if (completion == "all") { completion = ["true","false"] }
        return todos.filter(todo => priority.includes(todo.priority) && completion.includes(todo.completed.toString()))
    }
    static filterDom(values) {
        const todosDiv = document.querySelector("#todos") 
        todosDiv.textContent = ""
        const project = pubSub.emit("findProject", values.project)
        let todos = todoDom.filterTodos(project.todos, values.priority, values.completion)
        todos.forEach(todo => {
            todoDom.render({ todo: todo })
        })
        }
}