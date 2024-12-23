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
    static makeFormElement(elementType, elementValue = "", elementName = "", elementContent = "") {
        let element = document.createElement(elementType)
        element.value = elementValue
        element.name = elementName
        element.textContent = elementContent
        return element
    }
    static setTextContent(element, selector, text) {
        let target = element.querySelector(selector)
        target.textContent = text
        return target
    }
    static wrapElements(elements, parentElement) {
        for (const elem of elements) {
            parentElement.appendChild(elem)
        }
    }
}