import { createElement, createMidiaElement, createAnchorElement } from "../create-elements.js"

class Attachment {
    #attachmentContainer
    #attachmentIcon
    
    constructor(type, attachmentArray) {
        this.#attachmentIcon = createMidiaElement('img', '../midia/anexados_icone.svg', ['class', 'attachment-icon'])
        this.#attachmentContainer = createElement('div', '',  'attachment-container')
        this.type = type
        
        if (type === 'received') {
            this.#renderReceivedAttachment(attachmentArray)
           
        } else if (type === 'sent') {
            this.#renderSentAttachment(attachmentArray)
        }
    }

    #renderReceivedAttachment(attachmentArray) {
        this.#attachmentIcon.addEventListener('click', () => {
            console.log(attachmentArray)
            attachmentArray.forEach(midiaToDownload => {
                const a = createAnchorElement(midiaToDownload, true)
                document.body.appendChild(a)
                a.click()
                a.remove()
            })
        })
    }

    #renderSentAttachment(attachmentArray) {
            attachmentArray.forEach(midia => {
                const div = createElement('div')
                const midiaImg = createMidiaElement('img', midia, ['class', 'attached-midia'])
                const attachedIcon = createMidiaElement('img', '../midia/anexar_icone.svg', ['class', 'attached-icon'])
                div.append(midiaImg, attachedIcon)
                this.#attachmentContainer.appendChild(div)
            })
    }

    get attachmentElements() {
        
        if (this.type === 'received') {
            return this.#attachmentIcon
        } else if (this.type === 'sent') {
            return this.#attachmentContainer
        }
    }
}

export { Attachment }