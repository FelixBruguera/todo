import DomManager from "./dom";
import { pubSub } from "./index"

export default class todoDom extends DomManager {
    static cacheDOM() {
        this.content = document.querySelector("#content")
        pubSub.on("renderTodo", this.render, true)
        pubSub.on("filterTodos", this.filterDom, true)
        
    }
    static find(todoName) {
        const projectName = document.querySelector("h2.project-name").textContent
        const project = pubSub.emit("findProject", projectName)
        return project.todos.find(todo => todo.description == todoName)
    }
    static update(todoElem) {
        todoElem.classList.add("completed-todo")
        todoElem.querySelector("#todo-complete").remove()
        todoElem.querySelector("#todo-delete").remove()
        return todoElem
    }
    static create(todo) {
        const template = document.querySelector("#todo-template").content.cloneNode(true)
        super.setTextContent(template, ".todo-description", todo.description)
        template.querySelector(".todo").classList.add(`${todo.priority}-priority`)
        template.querySelector("div.todo").dataset.todoDescription = todo.description
        template.querySelector("#todo-complete").addEventListener("click", (e) => this.markasCompleted(e))
        template.querySelector("#todo-delete").addEventListener("click", (e) => this.destroy(e))
        if (todo.completed) { this.update(template.querySelector("div")) }
        return template
    }
    static markasCompleted(event) {
        const todoName = event.target.parentElement.parentElement.dataset.todoDescription
        const todoElem = event.target.parentElement.parentElement
        const todo = this.find(todoName)
        todo.markAsCompleted()
        this.update(todoElem)
    }
    static destroy(event) {
        const todoName = event.target.parentElement.parentElement.dataset.todoDescription
        const todoElem = event.target.parentElement.parentElement
        const projectName = document.querySelector(".project-name").textContent
        const project = pubSub.emit("findProject", projectName)
        const todo = this.find(todoName)
        todo.destroy(project)
        todoElem.remove()
    }
    static render(values) {
        let todosDiv = null
        if ("template" in values ) { todosDiv = values.template.querySelector("#todos") }
        else { todosDiv = document.querySelector("#todos") }
        let todoElem = todoDom.create(values.todo)
        if (values.isNew) { todoElem.querySelector("div.todo").classList.add("new-todo") }
        todosDiv.appendChild(todoElem)
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