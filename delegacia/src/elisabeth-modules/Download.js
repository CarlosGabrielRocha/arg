import { createMidiaElement, createAnchorElement } from "../create-elements.js"

// Cria um elemento de nota e suas respectivas funcionalidades
export class Download {
    #element
    #src
    constructor(src) {
        this.#src = src
        this.#element = this.#renderIcon()
    }
    // Cria o icone da nota
    #renderIcon() {
        const element = createMidiaElement('img', '../midia/download.svg')
        element.addEventListener('click', () => this.#startDownload())
        return element
    }
    // Renderiza o video quando o icone é clicado
    #startDownload() {
        const a = createAnchorElement(this.#src, true)
        a.click()
        a.remove()
    }

    get element() {
        return this.#element
    }
}