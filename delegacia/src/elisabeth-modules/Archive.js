import { createElement, createMidiaElement, createTextElement } from "../create-elements.js"
import { Image } from "./Image.js"

// Classe construtura de arquivos, um arquivo pode possuir vários files.

export class Archive {
    #archiveElement
    #files = []
    #type
    #description
    constructor(type = 'closed', description = '') {
        this.#type = type
        this.#description = description
        this.#archiveElement = this.#renderArchive()
    } 

    // Renderiza o ícone do arquivo
    #renderArchive() {
        const container = createElement('div')
        let img
        if (this.#type === 'closed') {
            img = createMidiaElement('img', '../midia/pasta_fechada_escuro.svg')
        } else if (this.#type === 'open') {
            img = createMidiaElement('img', '../midia/pasta_aberta_escuro.svg')
        } else {
            throw new Error('invalid archive type! [closed or open]')
        }
        
        const p = createTextElement('p', this.#description)
        container.append(img, p)
        container.addEventListener('click', () => this.#openArchive())

        const screen = document.querySelector('.screen')
        // Caso esse método já tenha sido chamado anteriormente, o elemento anterior é removido.
        if (screen.contains(this.#archiveElement)) {  
            screen.removeChild(this.#archiveElement)
            this.#archiveElement = container
        }

        screen.appendChild(container)
        return container
    }

    set type(type) {
        this.#type = type
        this.#renderArchive()
    }

    set description(description) {
        this.description = description
        this.#renderArchive()
    }

    get archiveElement() {
        return this.#archiveElement
    }

    // Remove todos os elementos da tela e adiciona os files que estão nesse arquivo
    #openArchive() {
        const screen = document.querySelector('.screen')
        screen.innerHTML = ''
        console.log(this)
        this.#files.forEach(file => screen.appendChild(file))
        // Página 1 é a pagina dos arquivos, página 2 é dentro de um arquivo
        screen.dataset.page = 'page2'
    }


    // Cria um novo file e a depender do tipo, serão de classes diferentes.
    newFile(type = '', src = '') {
        
        if (type === 'image') {
            const file = new Image(src)
            this.#files.push(file.imageElement)
        } else if (type === 'video') {

        } else if (type === 'note') {

        } else if (type === 'download') {
            
        } else {
            throw new Error('invalid file type! [image, video, note, download]')
        }
    }
}