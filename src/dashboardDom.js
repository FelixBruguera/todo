import DomManager from "./dom";
import { pubSub } from "./index"

export default class dashboardDom extends DomManager {
    static cacheDOM() {
        this.projectList = document.querySelector("ul#nav-projects")
        pubSub.on("newProject", this.newProject)
        pubSub.on("renderDashboard", this.renderDashboard, true)
    }
    static newProject(project) {
        let navElem = dashboardDom.createNavProject(project)
        super.wrapElements([navElem], document.querySelector("ul#nav-projects"))
    }
    static createNavProject(project) {
        const template = document.querySelector("#nav-project-template").content.cloneNode(true)
        super.setTextContent(template, ".nav-project-name", project.name)
        template.querySelector("div.nav-project").dataset.projectName = project.name
        template.querySelector(".nav-project-name").dataset.projectName = project.name
        return template
    }
    static renderDashboard(projects) {
        let projectElements = []
        for (const project of projects) {
            let projectElem = dashboardDom.createNavProject(project)
            projectElements.push(projectElem)
        }
        super.wrapElements(projectElements, document.querySelector("ul#nav-projects"))
        dashboardDom.projectList.addEventListener("click", (e) => { 
            if (e.target.id != "nav-projects") {
                let projectName = e.target.dataset.projectName
                let project = pubSub.emit("findProject", projectName)
                pubSub.emit("renderProject", project)
            }
        })
    }
}