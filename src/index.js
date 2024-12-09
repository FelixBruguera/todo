import pubsub from "./pubsub"
import Project from "./project.js"
import Todo from "./todo.js"

const pubSub = new pubsub()
const defaultProject = new Project("Miscelaneous todos", "A list of tasks from various projects", "31/12/2999")

export { pubSub }