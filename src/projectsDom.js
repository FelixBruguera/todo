import DomManager from "./dom";
import { pubSub } from "./index"
import { format } from "date-fns";

export default class projectsDom extends DomManager {
    static cacheDOM() {
        this.content = document.querySelector("#content")
        pubSub.on("renderProject", this.renderProject, true)
        pubSub.on("newProject", this.renderProject, true)
        pubSub.on("findProject", this.find, true)
    }
    static find(projectName) {
        const projects = pubSub.emit("getProjects")
        return projects.find(project => project.name == projectName)
    }
    static sortTodos(todos) {
        return todos.sort((a,b) => a.completed - b.completed)
    }
    static createProjectCard(project) {
        this.content.textContent = ''
        const template = document.querySelector("#project-template").content.cloneNode(true)
        super.setTextContent(template, ".project-name", project.name)
        super.setTextContent(template, ".project-description", project.description)
        super.setTextContent(template, ".project-deadline", project.deadline)
        if (project.deadline <= format(new Date(), "yyyy-MM-dd")) { 
            template.querySelector(".project-deadline").classList.add("overdue") 
        }
        project.todos = this.sortTodos(project.todos)
        template.querySelector("input[name='project']").value = project.name
        project.todos.forEach(todo => {
            pubSub.emit("renderTodo", {template, todo})
        })
        return template
    }
    static renderProject(project) {
        let projectElem = projectsDom.createProjectCard(project)
        super.wrapElements([projectElem], content)
    }
}