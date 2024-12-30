import DomManager from "./dom";
import { pubSub } from "./index"

export default class dashboardDom extends DomManager {
    constructor(projects) {
        super()
        this.projects = projects
        this.renderDashboard()
        // pubSub.on("newProject", this.newProject)
        // pubSub.on("renderDashboard", this.renderDashboard, true)
    }
    static newProject(project) {
        let navElem = dashboardDom.createNavProject(project)
        super.wrapElements([navElem], document.querySelector("ul#nav-projects"))
    }
    createNavProject(projectName) {
        const template = document.querySelector("#nav-project-template").content.cloneNode(true)
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
        console.log(this.projectList)
        super.wrapElements(projectElements, this.projectList)
    }
}