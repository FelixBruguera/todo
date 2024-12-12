export default class DomManager {
    constructor() {
        this.nav = document.querySelector("nav")
        this.content = document.querySelector("#content")
    }
    static makeDomElement(elementType, elementClass, elementContent) {
        let element = document.createElement(elementType)
        element.classList = elementClass
        element.textContent = elementContent
        return element
    }
    static setTextContent(element, selector, text) {
        element.querySelector(selector).textContent = text
    }
    static wrapElements(elements, parentElement) {
        for (const elem of elements) {
            parentElement.appendChild(elem)
        }
    }
}