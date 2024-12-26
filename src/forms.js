import DomManager from "./dom";
import { pubSub } from "./index";
import { format } from "date-fns";

export default class Forms extends DomManager {
    static cacheDOM() {
        this.newProjectButton = document.querySelector("button[data-formtarget='new-project']")
        this.projectForm = document.querySelector("#new-project-form")
        pubSub.on("renderProject", this.newTodoListener)
        pubSub.on("renderProject", this.filtersListeners)
        pubSub.on("newProject", this.newTodoListener)
        pubSub.on("newProject", this.filtersListeners)
        pubSub.on("renderDashboard", this.newProjectListener)
        this.populateForms()
    }
    static populateForms() {
        this.newProjectButton.addEventListener("click", function() {
            const dateField = document.querySelector("#new-project-form > input[type=date]")
            dateField.min = format(new Date(), "yyyy-MM-dd")
        }, {once: true})
    }
    static newProjectListener() {
        Forms.projectForm.addEventListener("submit", function(e) {
            e.preventDefault()
            let form = new FormData(document.querySelector("#new-project-form"))
            let formObject = {"name": form.get("name"), "description": form.get("description"), "deadline": form.get("deadline") }
            pubSub.emit("createProject", formObject)
            document.querySelector("#new-project").hidePopover()
            Forms.projectForm.reset()
        })
    }
    static newTodoListener() {
        const todoForm = document.querySelector("#new-todo-form")
        todoForm.addEventListener("submit", function(e) {
            e.preventDefault()
            let form = new FormData(document.querySelector("#new-todo-form"))
            let formObject = {"project": form.get("project"), "description": form.get("description"), "priority": form.get("priority") }
            pubSub.emit("createTodo", formObject)
            document.querySelector("#new-todo").hidePopover()
            todoForm.reset()
            todoForm.querySelector("input[name='project']").value = form.get("project")
        })
    }
    static filtersListeners() {
        const priority = document.querySelector("#todo-priority-select")
        const completion = document.querySelector("#todo-completion-select")
        priority.addEventListener("change", Forms.filtersChange)
        completion.addEventListener("change", Forms.filtersChange)
    }
    static filtersChange() {
        const priority = document.querySelector("#todo-priority-select").value
        const completion = document.querySelector("#todo-completion-select").value
        const project = document.querySelector(".project-name").textContent
        pubSub.emit("filterTodos", {priority: priority, completion: completion, project: project})
    }
}
