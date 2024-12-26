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
dashboardDom.cacheDOM()
projectsDom.cacheDOM()
todoDom.cacheDOM()
Forms.cacheDOM()
Storage.createSubscriptions()
let userProjects = []
let userData = pubSub.emit("loadProjects")
pubSub.on("projectChange", saveProjects)
pubSub.on("getProjects", () => userProjects)
pubSub.on("newProject", newProject)

function saveProjects() {
    pubSub.emit("saveProjects", userProjects)
}

function newProject(project) {
    userProjects.push(project)
    saveProjects()
}

function setDefaults() {
    const defaultProject = new Project("Miscelaneous todos", "A list of tasks from various projects", "2999/12/13")
    const testTodo = new Todo("Finish this site", "High")
    defaultProject.addTodo(testTodo)
    userProjects.push(defaultProject)
}

if (userData == null) { setDefaults() }
else { userProjects = userData }

pubSub.emit("renderDashboard", userProjects)

export { pubSub }