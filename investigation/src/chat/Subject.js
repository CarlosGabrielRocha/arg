import { createElement, createTextElement } from "../create-elements.js"

class Subject {
    #subjectContainer
    #subjectSpan
    constructor(text) {
        this.#subjectSpan = createTextElement('span')
        this.#subjectContainer = createElement('div', '', 'subject-container')
        this.#subjectSpan.innerHTML = `<strong>Subject: </strong>${text}`
        this.#subjectContainer.appendChild(this.#subjectSpan)
    }

    get subjectElements() {
        return this.#subjectContainer
    }
}

export { Subject }