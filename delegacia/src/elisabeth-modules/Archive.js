import { createElement, createMidiaElement, createTextElement } from "../create-elements.js"
import { Download } from "./Download.js"
import { Image } from "./Image.js"
import { Note } from "./Note.js"
import { tryPassword } from "./password-screen.js"
import { Screen } from "./Screen.js"
import { Video } from "./Video.js"
// Classe construtura de arquivos, um arquivo pode possuir vários files.

export class Archive {
    #element
    #files = []
    #password
    #type
    #description
    constructor(type = 'closed', password = '', description = '') {
        this.#type = type
        if (type === 'closed') {
            this.#password = password
        } 
        this.#description = description
        this.#element = this.#renderArchive()
    } 

    // Renderiza o ícone do arquivo
    #renderArchive() {
        const container = createElement('div')
        let img
        if (this.#type === 'closed') {
            img = createMidiaElement('img', '../midia/pasta_fechada.svg')
            container.addEventListener('click', () => tryPassword(this.#password, this))        
        } else if (this.#type === 'opened') {
            img = createMidiaElement('img', '../midia/pasta_aberta.svg')
            container.addEventListener('click', () => this.openArchive())
        } else {
            throw new Error('invalid archive type! [closed or opened]')
        }
        
        const p = createTextElement('p', this.#description)
        container.append(img, p)

        // Caso esse método já tenha sido chamado anteriormente, o elemento criado anteriormente é removido.
        
        if (Screen.element.contains(this.#element)) {  
            Screen.element.removeChild(this.#element)
        }

        Screen.appendArchive(container)   
        return container
    }

    set type(type) {
        this.#type = type
        this.#element = this.#renderArchive()
    }

    set description(description) {
        this.description = description
        this.#renderArchive()
    }

    get element() {
        return this.#element
    }

    // Remove todos os elementos da tela e adiciona as files que estão nesse arquivo
    openArchive() {
        const screen = document.querySelector('.screen')
        screen.innerHTML = ''
        this.#files.forEach(file => screen.appendChild(file.element))
        // Página 1 é a pagina dos arquivos, página 2 é dentro de um arquivo
        screen.dataset.page = 'page2'
    }


    // Cria um novo file e a depender do tipo, serão de classes diferentes.
    newFile(type = '', src = '', text = '') {
        if (type === 'image') {
            const img = new Image(src)
            this.#files.push(img)
        } else if (type === 'video') {
            const video = new Video(src)
            this.#files.push(video)
        } else if (type === 'note') {
            const note = new Note(text)
            this.#files.push(note)
        } else if (type === 'download') {
            const download = new Download(src)
            this.#files.push(download)
        } else {
            throw new Error('invalid file type! [image, video, note, download]')
        }
    }

}