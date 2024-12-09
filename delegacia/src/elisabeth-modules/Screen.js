import { Archive } from "./Archive.js"

// Classe referente ao elemento do DOM com id 'screen'

export class Screen {
    static #screenElement = document.querySelector('.screen')
    static #archives = []
    // Cria um novo arquivo e o adiciona no array de arquivos
    //...files = {type: 'value', src: 'value'}
    static newArchive(type = 'closed', description = '', ...files) { 
        const archive = new Archive(type, description)
        files.forEach(file => {
            archive.newFile(file.type, file.src)
        })
        Screen.#archives.push(archive)
    }

    static get archives() {
        return Screen.#archives
    }
}