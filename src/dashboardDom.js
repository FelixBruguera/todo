import DomManager from "./dom";
import { pubSub } from "./index"
import { format } from "date-fns"

export default class dashboardDom extends DomManager {
    static cacheDOM() {
        this.newProjectButton = document.querySelector("button[data-formtarget='new-project']")
        this.projectList = document.querySelector("ul#nav-projects")
        pubSub.on("newProject", this.newProject)
        pubSub.on("renderProject", this.newTodoListener)
        pubSub.on("newProject", this.newTodoListener)
    }
    static populateForms() {
        this.newProjectButton.addEventListener("click", function() {
            const dateField = document.querySelector("#new-project > input[type=date]")
            dateField.min = format(new Date(), "yyyy-MM-dd")
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
            todoForm.querySelector("input[name='project']").value = form.get("project")
        })
    }
    static newProject(project) {
        let navElem = dashboardDom.createNavProject(project)
        super.wrapElements([navElem], document.querySelector("ul#nav-projects"))
    }
    static createNavProject(project) {
        const template = document.querySelector("#nav-project-template").content.cloneNode(true)
        super.setTextContent(template, ".nav-project-name", project.name)
        template.querySelector("div.nav-project").dataset.projectName = project.name
        return template
    }
    static renderDashboard(projects) {
        let projectElements = []
        for (const project of projects) {
            let projectElem = this.createNavProject(project)
            projectElements.push(projectElem)
        }
        super.wrapElements(projectElements, document.querySelector("ul#nav-projects"))
        this.newProjectListener()
        this.projectList.addEventListener("click", (e) => { 
            if (e.target.id != "nav-projects") {
                pubSub.emit("renderProject", e)
            }
        })
    }
}