import DomManager from "./dom";
import { pubSub } from "./index"
import { format } from "date-fns"

export default class dashboardDom extends DomManager {
    static cacheDOM() {
        this.content = document.querySelector("#content")
        this.todoForm = document.querySelector("#new-todo")
        this.newProjectButton = document.querySelector("button[data-formtarget='new-project']")
        this.newTodoButton = document.querySelector("button[data-formtarget='new-todo']")
    }
    static populateForms() {
        this.newProjectButton.addEventListener("click", function() {
            const dateField = document.querySelector("#new-project > input[type=date]")
            dateField.min = format(new Date(), "yyyy-MM-dd")
        }, {once: true})
        this.newTodoButton.addEventListener("click", function() {
            const projects = pubSub.emit("getProjects")
            const projectsField = document.querySelector("#new-todo > select")
            for (const project of projects) {
                let option = DomManager.makeFormElement("option", project.name, project.name, project.name)
                projectsField.appendChild(option)
            }
        }, {once: true})
    }
    static newProjectListener() {
        const projectForm = document.querySelector("#new-project")
        projectForm.addEventListener("submit", function(e) {
            e.preventDefault()
            let form = new FormData(document.querySelector("#new-project"))
            let formObject = {"name": form.get("name"), "description": form.get("description"), "deadline": form.get("deadline") }
            pubSub.emit("createProject", formObject)
            projectForm.hidePopover()
            projectForm.reset()
        })
    }
    static newTodoListener() {
        const todoForm = document.querySelector("#new-todo")
        todoForm.addEventListener("submit", function(e) {
            e.preventDefault()
            let form = new FormData(document.querySelector("#new-todo"))
            let formObject = {"project": form.get("project"), "description": form.get("description"), "priority": form.get("priority") }
            pubSub.emit("createTodo", formObject)
            todoForm.hidePopover()
            todoForm.reset()
        })
    }
    static createProjectCard(project) {
        const template = document.querySelector("#project-card-template").content.cloneNode(true)
        super.setTextContent(template, ".project-name", project.name)
        super.setTextContent(template, ".project-deadline", `Deadline: ${project.deadline}`)
        template.querySelector("ul").dataset.projectName = project.name
        project.todos.forEach(todo => {
            let todoElem = super.makeDomElement("p", "todo-dashboard", todo.description)
            if (todo.completed) {todoElem.classList.add("completed-todo")}
            template.querySelector("#todos").appendChild(todoElem)
        })
        return template
    }
    static renderProject(project) {
        let projectElem = this.createProjectCard(project)
        super.wrapElements([projectElem], this.content)
    }
    static renderTodo(project, todo) {
        const projectElem = document.querySelector(`ul[data-project-name = '${project.name}']`)
        let todoElem = super.makeDomElement("p", "todo-dashboard", todo.description)
        projectElem.appendChild(todoElem)

    }
    static renderDashboard(projects) {
        let projectElements = []
        for (const project of projects) {
            let projectElem = this.createProjectCard(project)
            projectElements.push(projectElem)
        }
        content.className = "content-dashboard"
        super.wrapElements(projectElements, this.content)
        this.newProjectListener()
        this.newTodoListener()
    }
}