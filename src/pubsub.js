export default class pubsub {
    constructor() {
        this.queue = {}
    }
    on(subName, fn) {
        if (this.queue[subName] == undefined) {this.queue[subName] = []}
        if (Array.isArray(fn)) {fn.forEach(func => this.queue[subName].push(func))}
        else {this.queue[subName].push(fn)}
    }
    off(subName, fn) {
        let index = this.queue[subName].indexOf(fn)
        this.queue[subName].splice(index, 1)
    }
    emit(subName, values) {
        this.queue[subName].forEach(fn => fn(values))
    }
    clear() {
        this.queue = {}
    }
}