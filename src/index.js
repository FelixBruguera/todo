import pubsub from "./pubsub"
import Project from "./project.js"
import Todo from "./todo.js"
import dashboardDom from "./dashboardDom.js"
import projectsDom from "./projectsDom.js"
import todoDom from "./todoDom.js"
import Storage from "./storage.js"
import Forms from "./forms.js"
import "./index.css"

const pubSub = new pubsub()
Project.createSubscriptions()
Todo.createSubscriptions()
const STORAGE = new Storage()
const dashboard = new dashboardDom(STORAGE.getProjectList())
// projectsDom.cacheDOM()
// todoDom.cacheDOM()
// Forms.cacheDOM()
// Storage.createSubscriptions()

document.querySelector("#nav-projects").addEventListener("click", (e) => { 
    if (e.target.id != "nav-projects") {
        let projectName = e.target.dataset.projectName
        let projectJson = STORAGE.getProject(projectName)
        let project = new Project(projectJson.name, projectJson.description, projectJson.deadline, projectJson.todos)
        new projectsDom(project)
        project.todos.forEach(todoJson => {
            let todo = new Todo(todoJson.description, todoJson.getProjectList, todoJson.completed)
            new todoDom(todo)
        })
    }
})
// let userProjects = []
// let userData = pubSub.emit("loadProjects")
// pubSub.on("projectChange", saveProjects)
// pubSub.on("getProjects", () => userProjects)
// pubSub.on("newProject", newProject)

// function saveProjects() {
//     pubSub.emit("saveProjects", userProjects)
// }

// function newProject(project) {
//     userProjects.push(project)
//     saveProjects()
// }

// function setDefaults() {
//     const defaultProject = new Project("Miscelaneous todos", "A list of tasks from various projects", "2999/12/13")
//     const testTodo = new Todo("Finish this site", "High")
//     defaultProject.addTodo(testTodo)
//     userProjects.push(defaultProject)
// }

// if (userData == null) { setDefaults() }
// else { userProjects = userData }

// pubSub.emit("renderDashboard", userProjects)

export { pubSub }