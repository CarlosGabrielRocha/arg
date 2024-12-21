import { createMidiaElement, createElement, createTextElement } from "../create-elements.js"
import { addBlurBackground, removeBlurBackground } from "../blur.background.js"

// Cria um elemento de nota e suas respectivas funcionalidades
export class Note {
    #element
    #text
    constructor(text) {
        this.#text = text
        this.#element = this.#renderIcon()
    }
    // Cria o icone da nota
    #renderIcon() {
        const element = createMidiaElement('img', '../midia/notas_icone.svg')
        element.addEventListener('click', () => this.#renderNote())
        return element
    }
    // Renderiza o video quando o icone é clicado
    #renderNote() {
        const noteContainer = createElement('div', '', 'note-container')
        const noteSpan = createTextElement('span', this.#text)
        noteContainer.appendChild(noteSpan)
        addBlurBackground()
        document.body.appendChild(noteContainer)
        noteContainer.addEventListener('click', () => {
            removeBlurBackground()
            noteContainer.remove()
        }, {once: true})
    }

    get element() {
        return this.#element
    }
}