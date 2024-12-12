import DomManager from "./dom";
import { pubSub } from "./index"

export default class dashboardDom extends DomManager {
    constructor() {
        this.content = document.querySelector("#content")
        this.projectForm = document.querySelector("#new-project")
        this.todoForm = document.querySelector("#new-todo")
    }
    static setListeners() {
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
    static createProjectCard(project) {
        const template = document.querySelector("#project-card-template").content.cloneNode(true)
        super.setTextContent(template, ".project-name", project.name)
        super.setTextContent(template, ".project-deadline", `Deadline: ${project.deadline}`)
        project.todos.forEach(todo => {
            let todoElem = super.makeDomElement("p", "todo-dashboard", todo.description)
            if (todo.completed) {todoElem.classList.add("completed-todo")}
            template.querySelector("#todos").appendChild(todoElem)
        })
        return template
    }
    static renderProject(project) {
        let projectElem = this.createProjectCard(project)
        super.wrapElements([projectElem], content)
    }
    static renderDashboard(projects) {
        let projectElements = []
        for (const project of projects) {
            let projectElem = this.createProjectCard(project)
            projectElements.push(projectElem)
        }
        content.className = "content-dashboard"
        super.wrapElements(projectElements, content)
        this.setListeners()
    }
}