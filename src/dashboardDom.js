import DomManager from "./dom";

export default class dashboardDom extends DomManager {
    constructor(projects) {
        super()
        this.projects = projects
        this.projectList = document.querySelector("ul#nav-projects")
        this.renderDashboard()
    }
    addProject(projectName) {
        let projectElem = this.createNavProject(projectName)
        this.projectList.appendChild(projectElem)
    }
    finishProject(projectName) {
        document.querySelector(`div[data-project-name = ${projectName}]`).classList.add("finished-project")
    }
    createNavProject(project) {
        let template = document.querySelector("#nav-project-template").content.cloneNode(true)
        super.setTextContent(template, ".nav-project-name", project.name)
        template.querySelector("div.nav-project").dataset.projectName = project.name
        template.querySelector(".nav-project-name").dataset.projectName = project.name
        if (project.isFinished) { template.querySelector("div").classList.add("finished-project")}
        return template
    }
    renderDashboard() {
        let projectElements = []
        for (const project of this.projects) {
            let projectElem = this.createNavProject(project)
            projectElements.push(projectElem)
        }
        super.wrapElements(projectElements, this.projectList)
    }
}