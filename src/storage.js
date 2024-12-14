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
        let projects = localStorage.getItem("userProjects")
        if (projects != null) {
            projects =  Storage.deserialize(projects) 
            projects = projects.map(project => {
                const newProject = pubSub.emit("restoreProject", project)
                newProject.todos = project.todos.map(todo => pubSub.emit("restoreTodo", todo));
                return newProject;
              })
            }
        return projects
    }
    static saveUserProjects(projects) {
        let data = Storage.serialize(projects)
        localStorage.setItem("userProjects", data)
    }

}