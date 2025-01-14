import DomManager from "./dom";

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
        this.template.querySelector("#todo-complete").addEventListener("click", (e) => this.finish(e))
        this.template.querySelector("#todo-delete").addEventListener("click", (e) => this.destroy())
        this.todoElem = this.template.querySelector("div")
        if (this.todo.completed) { this.finish() }
        return this.template
    }
    finish() {
        this.todo.finish()
        this.todoElem.classList.add("completed-todo")
        this.todoElem.querySelector("#todo-complete").remove()
        this.todoElem.querySelector("#todo-delete").remove()
        this.todosDiv.appendChild(this.todoElem)
        this.storage.saveProject(this.project.name, this.project)
    }
    destroy() {
        this.todo.destroy(this.project)
        this.todoElem.remove()
        this.storage.saveProject(this.project.name, this.project)
    }
    render() {
        let todoElem = this.create()
        // let firstCompletedTodo = document.querySelector(".completed-todo")
        this.todosDiv.prepend(todoElem)
    }
}