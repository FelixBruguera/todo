export default class Storage {
    constructor() {
        this.userProjects = this.deserialize(localStorage.getItem("userProjects"))
    }
    getProject(name) {
        return this.deserialize(localStorage.getItem(name))
    }
    getProjectList() {
        return Object.keys(localStorage)
    }
    saveProject(name, project) {
        localStorage.setItem(name, this.serialize(project))
    }
    serialize(object) {
        return JSON.stringify(object)
    }
    deserialize(object) {
        return JSON.parse(object)
    }
}