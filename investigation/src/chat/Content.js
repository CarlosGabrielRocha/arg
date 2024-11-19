import { createElement, createTextElement } from "../create-elements.js";

class Content {
    #contentContainer
    #paragraths
    constructor(textArray) {
        this.#contentContainer = createElement('div', '', 'content-container')
        if (Array.isArray(textArray)) {
            this.#paragraths = textArray.map(text => {
                const p = createTextElement('p', text)
                this.#contentContainer.appendChild(p)
                return p 
            })
        } else {
            throw new Error('The parameter must be of array type!')
        }

    }

    get paragraths() {
        return this.#paragraths
    }

    get contentElements() {
        return this.#contentContainer
    }
}

export { Content }