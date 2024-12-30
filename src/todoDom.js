import DomManager from "./dom";
import { pubSub } from "./index"

export default class todoDom extends DomManager {
    constructor(todo) {
        super()
        this.todo = todo
        this.todosDiv = document.querySelector("#todos")
        this.template = document.querySelector("#todo-template").content.cloneNode(true)
        this.todoElem = null
        this.render()
    }
    static find(todoName) {
        const projectName = document.querySelector("h2.project-name").textContent
        const project = pubSub.emit("findProject", projectName)
        return project.todos.find(todo => todo.description == todoName)
    }
    update() {
        this.todoElem.classList.add("completed-todo")
        this.todoElem.querySelector("#todo-complete").remove()
        this.todoElem.querySelector("#todo-delete").remove()
    }
    create() {
        super.setTextContent(this.template, ".todo-description", this.todo.description)
        this.template.querySelector(".todo").classList.add(`${this.todo.priority}-priority`)
        this.template.querySelector("div.todo").dataset.todoDescription = this.todo.description
        this.template.querySelector("#todo-complete").addEventListener("click", (e) => this.markasCompleted(e))
        this.template.querySelector("#todo-delete").addEventListener("click", (e) => this.destroy(e))
        this.todoElem = this.template.querySelector("div")
        if (this.todo.completed) { this.update(this.template.querySelector("div")) }
        return this.template
    }
    markasCompleted() {
        this.todo.markAsCompleted()
        this.update()
    }
    destroy(event) {
        const todoName = event.target.parentElement.parentElement.dataset.todoDescription
        const todoElem = event.target.parentElement.parentElement
        const projectName = document.querySelector(".project-name").textContent
        const project = pubSub.emit("findProject", projectName)
        const todo = this.find(todoName)
        todo.destroy(project)
        todoElem.remove()
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