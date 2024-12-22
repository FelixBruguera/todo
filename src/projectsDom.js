import DomManager from "./dom";
import { pubSub } from "./index"

export default class projectsDom extends DomManager {
    static cacheDOM() {
        this.content = document.querySelector("#content")
        pubSub.on("renderProject", this.renderProject, true)
        pubSub.on("newProject", this.renderProject, true)
    }
    static findProject(event, projectName = null) {
        if (projectName == null) { projectName = event.target.dataset.projectName }
        const projects = pubSub.emit("getProjects")
        return projects.find(project => project.name == projectName)
    }
    static findTodo(event, todoName) {
        const projectName = document.querySelector("h2.project-name").textContent
        const project = this.findProject(event, projectName)
        return project.todos.find(todo => todo.description == todoName)
    }
    static createProjectCard(project) {
        this.content.textContent = ''
        if (project.name == null) { project = this.findProject(project) }
        const template = document.querySelector("#project-template").content.cloneNode(true)
        super.setTextContent(template, ".project-name", project.name)
        super.setTextContent(template, ".project-description", project.description)
        project.todos = project.todos.sort((a,b) => a.completed - b.completed)
        template.querySelector("input[name='project']").value = project.name
        project.todos.forEach(todo => {
            let todoElem = this.createTodoCard(todo)
            template.querySelector("#todos").appendChild(todoElem)
        })
        return template
    }
    static updateTodoElem(todoElem) {
        todoElem.classList.add("completed-todo")
        todoElem.querySelector("#todo-complete").remove()
        todoElem.querySelector("#todo-delete").remove()
        return todoElem
    }
    static createTodoCard(todo) {
        const template = document.querySelector("#todo-template").content.cloneNode(true)
        super.setTextContent(template, ".todo-description", todo.description)
        template.querySelector(".todo").classList.add(`${todo.priority}-priority`)
        template.querySelector("div.todo").dataset.todoDescription = todo.description
        template.querySelector("#todo-complete").addEventListener("click", (e) => this.markasCompleted(e))
        template.querySelector("#todo-delete").addEventListener("click", (e) => this.deleteTodo(e))
        if (todo.completed) { this.updateTodoElem(template.querySelector("div")) }
        return template
    }
    static renderProject(project) {
        let projectElem = projectsDom.createProjectCard(project)
        super.wrapElements([projectElem], content)
    }
    static renderTodo(project, todo) {
        const todosDiv = document.querySelector("#todos")
        let todoElem = this.createTodoCard(todo)
        todoElem.querySelector("div.todo").classList.add("new-todo")
        todosDiv.appendChild(todoElem)
    }
    static markasCompleted(event) {
        const todoName = event.target.parentElement.parentElement.dataset.todoDescription
        const todoElem = event.target.parentElement.parentElement
        const todo = this.findTodo(event, todoName)
        todo.markAsCompleted()
        this.updateTodoElem(todoElem)
    }
    static deleteTodo(event) {
        const todoName = event.target.parentElement.parentElement.dataset.todoDescription
        const todoElem = event.target.parentElement.parentElement
        const projectName = document.querySelector(".project-name").textContent
        const project = this.findProject(event, projectName)
        const todo = this.findTodo(event, todoName)
        todo.destroy(project)
        // todoElem.id = "deleted-todo"
        setTimeout(() => todoElem.remove(), 0)
    }
}