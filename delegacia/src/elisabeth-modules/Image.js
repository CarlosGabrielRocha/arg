import { createMidiaElement } from "../create-elements.js"
import { addBlurBackground, removeBlurBackground } from "../blur.background.js"
// Cria um elemento de imagem e suas respectivas funcionalidades
export class Image {
    #imageElement
    #src
    constructor(src) {
        this.#src = src
        this.#imageElement = this.#renderIcon()
    }
    // Cria o icone da imagem
    #renderIcon() {
        const element = createMidiaElement('img', '../midia/imagem_escuro.svg')
        element.addEventListener('click', () => this.#renderImage())
        return element
    }
    // Renderiza a imagem quando o icone é clicado
    #renderImage() {
        const img = createMidiaElement('img', this.#src, ['class', 'file'])
        addBlurBackground()
        document.body.appendChild(img)
        img.addEventListener('click', () => {
            removeBlurBackground()
            img.remove()
        }, {once: true})
    }

    get imageElement() {
        return this.#imageElement
    }
}