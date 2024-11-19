import { renderEmailsPreview } from "./chat.actions.js"
import { createElement, createMidiaElement } from "../create-elements"
import { Email } from "./Email.js"

class Profile {
    #profilePicture
    #emails = [

    ]
    constructor(name, profileImgSrc) {
        this.name = name
        this.profilePictureSrc = profileImgSrc
        this.#renderProfilePicture(profileImgSrc)
        // Ao clicar na imagem de perfil, os emails desse perfil serão renderizados.
        this.#profilePicture.addEventListener('click', () => {
            renderEmailsPreview(this)
        })
    }

    writeEmail(type = '', subjectText = '', contentText = [], ...attachment) {
        const email = new Email(type, subjectText, contentText, attachment)
        this.#emails.push(email)
    }

    // Renderiza a imagem de perfil.

    #renderProfilePicture(profileImgSrc) {
        const div = createElement('div')
        const img = createMidiaElement('img', profileImgSrc)
        div.appendChild(img)
        this.#profilePicture = div
        const chatProfiles = document.querySelector('#chat-perfis')
        chatProfiles.appendChild(div)
    }

    get emails() {
        return this.#emails
    }
}

export { Profile }