import { Content } from "./Content.js";
import { Subject } from "./Subject.js";
import { Attachment } from "./Attachment.js";
import { createElement, createTextElement } from "../create-elements.js";
import { displayEmail } from "./emails.actions.js";

class Email {
    #subject
    #content
    #attachment
    #preview
    constructor(type = '', subjectText = '', contentText = [], attachment = []) {
        this.#subject = new Subject(subjectText)
        this.#content = new Content(contentText)
        if (attachment.length) {
            this.#attachment = new Attachment(type, attachment)
        }
        if (type === 'received') {
            this.#createEmailPreview(subjectText)
        } 
    }

    get subject() {
        return this.#subject.subjectElements
    }

    get content() {
        return this.#content.contentElements
    }

    get attachment() {
        if (this.#attachment) {
            return this.#attachment.attachmentElements
        }
    }

    // Cria uma prévia do e-mail no DOM

    #createEmailPreview(subjectText) {
        const div = createElement('div', '', 'email')
        const p = createTextElement('p', subjectText)
        div.appendChild(p)
        div.addEventListener('click', () => {
            displayEmail(this.subject, this.content, this.attachment)
        })
        this.#preview = div
    }

    get preview() {
        return this.#preview
    }

}

export { Email }