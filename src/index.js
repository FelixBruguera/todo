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
const DASHBOARD = new dashboardDom(STORAGE.getProjectList())
const FORMS = new Forms()
const navProjects = document.querySelector("#nav-projects")
const newProjectForm = document.querySelector("#new-project-form")
let currentProject = null

if (STORAGE.getProjectList().length == 0) { setDefaults() }

navProjects.addEventListener("click", function(e) {
    if (e.target.id != "nav-projects") {
        let projectName = e.target.dataset.projectName
        let projectJson = STORAGE.getProject(projectName)
        let project = new Project(projectJson.name, projectJson.description, projectJson.deadline, projectJson.todos)
        renderProject(project)
    }
})

newProjectForm.addEventListener("submit", function(e) {
    let response = FORMS.projectFormHandler(e)
    let project = new Project(response.name, response.description, response.deadline, response.todos)
    if (STORAGE.getProjectList().includes(project.name)) { window.alert("ERROR: There's another project with that name") }
    else {
        DASHBOARD.addProject(project.name)
        STORAGE.saveProject(project.name, project)
        renderProject(project)
    }
})

function renderProject(project) {
    new projectsDom(project)
    project.todos = project.todos.map(todoJson => {
        let todo = new Todo(todoJson.description, todoJson.priority, todoJson.completed)
        new todoDom(todo, project, STORAGE)
        return todo
    })
    document.querySelector("#new-todo-form").addEventListener("submit", (e) => newTodo(e))
    currentProject = project
}
function newTodo(e) {
    let response = FORMS.todoFormHandler(e)
    let todo = new Todo(response.description, response.priority, false)
    currentProject.addTodo(todo)
    new todoDom(todo, currentProject, STORAGE)
    STORAGE.saveProject(currentProject.name, currentProject)
}

function renderTodos(todos) {
    todos.forEach(todoJson => {
        let todo = new Todo(todoJson.description, todoJson.getProjectList, todoJson.completed)
        new todoDom(todo)
    })
}
function setDefaults() {
    let defaultProject = new Project("Miscelaneous todos", "A list of tasks from various projects", "2999/12/31")
    let defaultTodo = new Todo("Test todo", "low", false)
    defaultProject.addTodo(defaultTodo)
    STORAGE.saveProject(defaultProject.name, defaultProject)
    renderProject(defaultProject)
}

export { pubSub }