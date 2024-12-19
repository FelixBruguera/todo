import pubsub from "./pubsub"
import Project from "./project.js"
import Todo from "./todo.js"
import dashboardDom from "./dashboardDom.js"
import projectsDom from "./projectsDom.js"
import Storage from "./storage.js"
import "./index.css"

const pubSub = new pubsub()
Project.createSubscriptions()
Todo.createSubscriptions()
dashboardDom.cacheDOM()
projectsDom.cacheDOM()
dashboardDom.populateForms()
Storage.createSubscriptions()
let userProjects = []
let userData = pubSub.emit("loadProjects")
pubSub.on("projectChange", saveProjects)
pubSub.on("getProjects", () => userProjects)

function saveProjects() {
    pubSub.emit("saveProjects", userProjects)
}

function setDefaults() {
    const defaultProject = new Project("Miscelaneous todos", "A list of tasks from various projects", "2999/12/13")
    const testTodo = new Todo("Finish this site", "High")
    defaultProject.addTodo(testTodo)
    userProjects.push(defaultProject)
}

if (userData == null) { setDefaults() }
else { userProjects = userData }

pubSub.on("createProject", (values) => {
    let project = new Project(values.name, values.description, values.deadline)
    userProjects.push(project)
    pubSub.emit("newProject", project)
    saveProjects()
}, true)

pubSub.on("createTodo", (values) => {
    let todo = new Todo(values.description, values.priority)
    let project = userProjects.find(project => project.name == values.project)
    project.addTodo(todo)
    projectsDom.renderTodo(project, todo)
    saveProjects()
}, true)

dashboardDom.renderDashboard(userProjects)

export { pubSub }