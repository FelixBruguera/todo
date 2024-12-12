export default class pubsub {
    constructor() {
        this.queue = {}
    }
    on(subName, fn, runfirst = false) {
        if (this.queue[subName] == undefined) {this.queue[subName] = []}
        if (this.queue[subName].includes(fn)) {return console.log("Already on queue")}
        else {
            if (runfirst) {this.queue[subName].unshift(fn)}
            else {this.queue[subName].push(fn)}
        }
    }
    off(subName, fn) {
        let index = this.queue[subName].indexOf(fn)
        this.queue[subName].splice(index, 1)
    }
    emit(subName, values) {
        const functions = this.queue[subName]
        if (functions.length == 1) { return functions[0](values) }
        else { functions.forEach(fn => fn(values)) }
    }
    clear() {
        this.queue = {}
    }
}