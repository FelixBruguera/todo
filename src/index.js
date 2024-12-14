import pubsub from "./pubsub"
import Project from "./project.js"
import Todo from "./todo.js"
import dashboardDom from "./dashboardDom.js"
import Storage from "./storage.js"
import "./index.css"

const pubSub = new pubsub()
Project.createSubscriptions()
Todo.createSubscriptions()
dashboardDom.cacheDOM()
dashboardDom.populateForms()
Storage.createSubscriptions()
let userProjects = []
let userData = pubSub.emit("getProjects")

function setDefaults() {
    const defaultProject = new Project("Miscelaneous todos", "A list of tasks from various projects", "2999/12/13")
    const testTodo = new Todo("Finish this site", "High")
    defaultProject.addTodo(testTodo)
    userProjects.push(defaultProject)
}

if (userData == false) { setDefaults() }
else { userProjects = userData }

console.log(userData)
pubSub.on("createProject", (values) => {
    let project = new Project(values.name, values.description, values.deadline)
    userProjects.push(project)
    dashboardDom.renderProject(project)
    pubSub.emit("saveProjects", userProjects)
}, true)

pubSub.on("createTodo", (values) => {
    let todo = new Todo(values.description, values.priority)
    let project = userProjects.find(project => project.name == values.project)
    // console.log([project, todo])
    // console.log(project.todos)
    project.addTodo(todo)
    dashboardDom.renderTodo(project, todo)
    pubSub.emit("saveProjects", userProjects)
}, true)

dashboardDom.renderDashboard(userProjects)

export { pubSub }