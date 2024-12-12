import { pubSub } from "./index"

export default class Storage {
    static createSubscriptions() {
        pubSub.on("getProjects", Storage.getUserProjects)
        pubSub.on("saveProjects", Storage.saveUserProjects)
    }
    static serialize(object) {
        return JSON.stringify(object)
    }
    static deserialize(object) {
        return JSON.parse(object)
    }
    static getUserProjects() {
        const projects = localStorage.getItem("userProjects")
        if (projects == null) { return false }
        else { return Storage.deserialize(projects) }
    }
    static saveUserProjects(projects) {
        let data = Storage.serialize(projects)
        localStorage.setItem("userProjects", data)
    }

}