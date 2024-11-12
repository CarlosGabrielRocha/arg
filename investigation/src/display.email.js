import { createElement, createMidiaElement, createAnchorElement } from "./create-elements.js"
import { addBlurBackground, removeBlurBackground } from "./blur.background.js"

// Carregar o email na tela

const emailBody = createElement('section', '', 'email-body', 'overlayScreen')
const sendEmailBody = createElement('section', '', 'email-body', 'overlayScreen')

function displayEmail(subject, content = [], ...attachment) {

    // Elementos que compõe a parte do assunto do email
    const subjectContainer = createElement('div', '', 'subject-container')
    const subjectSpan = createElement('span')
    subjectSpan.innerHTML = `<strong>Subject: </strong>${subject}`
    subjectContainer.appendChild(subjectSpan)
    emailBody.appendChild(subjectContainer)

    // Um icone para baixar os arquivos anexados será renderizado caso haja algum.
    if (attachment.length) {
        const attachmentIcon = createMidiaElement('img', '../midia/anexados_icone.svg', ['class', 'attachment-icon'])
        attachmentIcon.addEventListener('click', () => {
            attachment.forEach(midiaToDownload => {
                const a = createAnchorElement(midiaToDownload, true)
                document.body.appendChild(a)
                a.click()
                a.remove()
            })
        })
        emailBody.appendChild(attachmentIcon)
    }

    // Elementos que compõe a parte do conteúdo do email
    const contentContainer = createElement('div', '', 'content-container')
    content.forEach(p => {
        contentContainer.appendChild(p)
    })
    emailBody.appendChild(contentContainer)
    document.body.appendChild(emailBody)
    addBlurBackground()
}

// Removerá o email da tela caso o elemento que for clicado não seja o de download dos arquivos anexados

emailBody.addEventListener('click', (ev) => {

    if (!ev.target.classList.contains('attachment-icon')) {
        emptyEmailBody()
    }

})

function emptyEmailBody() {
    emailBody.innerHTML = ''
    emailBody.remove()
    sendEmailBody.innerHTML = ''
    sendEmailBody.remove()
    removeBlurBackground()
}

// Enviar Email

function sendEmail(subject, content = [], ...attachment) {
    
    // Elementos que compõe a parte do assunto do email
    const subjectContainer = createElement('div', '', 'subject-container')
    const subjectSpan = createElement('span')
    subjectSpan.innerHTML = `<strong>Subject: </strong>${subject}`
    subjectContainer.appendChild(subjectSpan)
    sendEmailBody.appendChild(subjectContainer)

    // Ícone para enviar email
    const sendIcon = createMidiaElement('img', '../midia/enviar_icone.svg', ['id', 'send'])
    sendEmailBody.appendChild(sendIcon)

    sendIcon.addEventListener('click', () => {
        emptyEmailBody()
    }, {once: true})
    
    // Arquivos Anexados
    if (attachment.length) {
        const attachedContainer = createElement('div', '',  'attachment-container')
        attachment.forEach(midia => {
            const div = createElement('div')
            const midiaImg = createMidiaElement('img', midia, ['class', 'attached-midia'])
            const attachedIcon = createMidiaElement('img', '../midia/anexar_icone.svg', ['class', 'attached-icon'])
            div.append(midiaImg, attachedIcon)
            attachedContainer.appendChild(div)
        })
        sendEmailBody.appendChild(attachedContainer)
    }

    // Elementos que compõe a parte do conteúdo do email
    const contentContainer = createElement('div', '', 'content-container')
    content.forEach(p => {
        contentContainer.appendChild(p)
    })
    sendEmailBody.appendChild(contentContainer)
    document.body.appendChild(sendEmailBody)
    addBlurBackground()
}


export { displayEmail, sendEmail }