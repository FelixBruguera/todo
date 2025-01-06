import DomManager from "./dom";
import { pubSub } from "./index";
import { format } from "date-fns";

export default class Forms {
    constructor() {
        this.projectButton = document.querySelector("button[data-formtarget='new-project']")
        this.projectForm = document.querySelector("#new-project-form")
        this.projectPopover = document.querySelector("#new-project")
        this.populateForms()
    }
    populateForms() {
        this.projectButton.addEventListener("click", function() {
            const dateField = document.querySelector("#new-project-form > input[type=date]")
            dateField.min = format(new Date(), "yyyy-MM-dd")
        }, {once: true})
    }
    projectFormHandler(e) {
        e.preventDefault()
        let form = new FormData(document.querySelector("#new-project-form"))
        let formObject = {"name": form.get("name"), "description": form.get("description"), "deadline": form.get("deadline") }
        this.projectPopover.hidePopover()
        this.projectForm.reset()
        return formObject
    }
    todoFormHandler(e) {
        e.preventDefault()
        let todoForm = document.querySelector("#new-todo-form")
        let todoPopover = document.querySelector("#new-todo")
        let form = new FormData(todoForm)
        let formObject = {"project": form.get("project"), "description": form.get("description"), "priority": form.get("priority") }
        todoPopover.hidePopover()
        todoForm.reset()
        todoForm.querySelector("input[name='project']").value = form.get("project")
        return formObject
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
