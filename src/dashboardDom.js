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
    createNavProject(projectName) {
        let template = document.querySelector("#nav-project-template").content.cloneNode(true)
        super.setTextContent(template, ".nav-project-name", projectName)
        template.querySelector("div.nav-project").dataset.projectName = projectName
        template.querySelector(".nav-project-name").dataset.projectName = projectName
        return template
    }
    renderDashboard() {
        let projectElements = []
        for (const projectName of this.projects) {
            let projectElem = this.createNavProject(projectName)
            projectElements.push(projectElem)
        }
        super.wrapElements(projectElements, this.projectList)
    }
}