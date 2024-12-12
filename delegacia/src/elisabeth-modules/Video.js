import { createMidiaElement } from "../create-elements.js"
import { addBlurBackground, removeBlurBackground } from "../blur.background.js"

// Cria um elemento de vídeo e suas respectivas funcionalidades
export class Video {
    #element
    #src
    constructor(src) {
        this.#src = src
        this.#element = this.#renderIcon()
    }
    // Cria o icone do vídeo
    #renderIcon() {
        const element = createMidiaElement('img', '../midia/video_escuro.svg')
        element.addEventListener('click', () => this.#renderImage())
        return element
    }
    // Renderiza o video quando o icone é clicado
    #renderImage() {
        const video = createMidiaElement('video',  this.#src, ['class', 'file'], ['controls', ''])
        addBlurBackground()
        document.body.appendChild(video)
        video.addEventListener('click', () => {
            removeBlurBackground()
            video.remove()
        }, {once: true})
    }

    get element() {
        return this.#element
    }
}