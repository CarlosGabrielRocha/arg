import { createElement, createMidiaElement } from "../create-elements.js"
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
        const element = createMidiaElement('img', '../midia/video.svg')
        element.addEventListener('click', () => this.#renderVideo())
        return element
    }
    // Renderiza o video quando o icone é clicado
    #renderVideo() {
        const videoContainer = createElement('div', '', 'video-container')
        const video = createMidiaElement('video',  this.#src, ['class', 'file'], ['controls', ''])
        videoContainer.appendChild(video)
        addBlurBackground()
        document.body.appendChild(videoContainer)
        videoContainer.addEventListener('click', () => {
            removeBlurBackground()
            videoContainer.remove()
        }, {once: true})
    }

    get element() {
        return this.#element
    }
}