import { renderEmailsPreview } from "./emails.actions.js"
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
            this.#replaceProfilesClass()
            this.#profilePicture.classList.replace('perfil', 'perfil-selecionado')
            renderEmailsPreview(this)
        })
    }

    writeEmail(type = '', subjectText = '', contentText = [], ...attachment) {
        const email = new Email(type, subjectText, contentText, attachment)
        this.#emails.push(email)
    }

    // Renderiza a imagem de perfil.

    #renderProfilePicture(profileImgSrc) {
        const img = createMidiaElement('img', profileImgSrc, ['class', 'perfil'])
        img.alt = this.name
        this.#profilePicture = img
        const chatProfiles = document.querySelector('#chat-perfis')
        chatProfiles.appendChild(img)
    }

    // Retira a classe 'perfil-selecionado' e adicionada a 'perfil'

    #replaceProfilesClass() {
        const profiles = document.querySelectorAll('#chat-perfis > img')
        profiles.forEach(profile => {
            profile.classList.replace('perfil-selecionado', 'perfil')
        })
    }

    get emails() {
        return this.#emails
    }

    get profilePicture() {
        return this.#profilePicture
    }
}

export { Profile }