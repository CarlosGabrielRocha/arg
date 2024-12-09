import { addBlurBackground, removeBlurBackground } from "../blur.background.js"
import {createAnchorElement, createElement, createMidiaElement, createTextElement} from "../create-elements.js"

export class File {
    #fileElement
    constructor(type = 'image', src = '', ...content) { // type = image, video, note, download
        this.#fileElement = this.#renderFile()
        this.type = type
        this.src = src
        this.content = [...content]
    }

    set type(value) {
        this.type = value
        this.#renderFile()
    }
    
    #renderFile() {
        if (this.type === 'image') {
            const element = createMidiaElement('img', '../midia/imagem_escuro.svg')
            element.addEventListener('click', this.#renderImage())
            return element
        } else if (this.type === 'video') {
            const element = createMidiaElement('img', '../midia/video_escuro.svg')
            element.addEventListener('click', this.#renderVideo())
            return element
        } else if (this.type === 'note') {
            const element = createMidiaElement('img', '../midia/notas_escuro.svg')
            element.addEventListener('click', this.#renderNote)
            return element
        } else if (this. type === 'download') {
            const element = createMidiaElement('img', '../midia/download_escuro.svg')
            element.addEventListener('click', this.#download)
            return element
        } else {
            throw new Error('invalid file type! [image, video, note, download]')
        }
    }

    #renderImage() {
        const img = createMidiaElement('img', this.src, ['class', 'file'])
        addBlurBackground()
        document.body.appendChild(img)
        img.addEventListener('click', () => {
            removeBlurBackground()
            img.remove()
        }, {once: true})
    }

    #renderVideo() {
        const video = createMidiaElement('video', this.src, ['class', 'file'])
        addBlurBackground()
        document.body.appendChild(video)
        video.addEventListener('click', () => {
            removeBlurBackground()
            video.remove()
        }, {once: true})
    }

    #renderNote(...text) {
        const container = createElement('div', '', 'note-container')
        addBlurBackground()
        text.forEach(text => {
            const p = createTextElement('p', text)
            container.appendChild(p)
        })
        container.addEventListener('click', () => {
            removeBlurBackground()
            container.remove()
        }, {once:true})
    }

    #download(...filesSrc) {
        filesSrc.forEach(src => {
            const a = createAnchorElement(src, true)
            a.click()
        })
    }

}