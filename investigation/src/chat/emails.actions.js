import { createElement, createMidiaElement, createTextElement} from "../create-elements.js"
import { addBlurBackground, removeBlurBackground } from "../blur.background.js"
import { newNotification } from "../toast.js"
import { open } from "../sounds-effects.js"

// Carregar o email na tela

const emailBody = createElement('section', '', 'email-body', 'overlayScreen')
const sendEmailBody = createElement('section', '', 'email-body', 'overlayScreen')

function displayEmail(subjectElements, contentElements, attachmentElements) {
    // Elementos que compõe a parte do assunto do email
    emailBody.appendChild(subjectElements)

    // Um icone para baixar os arquivos anexados será renderizado caso haja algum.
    if (attachmentElements) {
        emailBody.appendChild(attachmentElements)
    }

    // Elementos que compõe a parte do conteúdo do email
    emailBody.appendChild(contentElements)
    document.body.appendChild(emailBody)
    addBlurBackground()
    open.play()
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

// Email para enviar 

function writeEmail(subjectElements, contentElements, attachmentElements, receiver, emailKey) { 

    // Remetente
    const receiverContainer = createElement('div', 'receiver-container')
    const receiverSpan = createTextElement('span')
    receiverSpan.innerText = 'Receiver: '
    receiverContainer.append(receiverSpan, receiver.profilePicture.cloneNode(true))
    sendEmailBody.appendChild(receiverContainer)

    // Elementos que compõe a parte do assunto do email
    sendEmailBody.appendChild(subjectElements)

    // Ícone para enviar email
    const sendIcon = createMidiaElement('img', '../midia/enviar_icone.svg', ['id', 'send'])
    sendEmailBody.appendChild(sendIcon)

    sendIcon.addEventListener('click', () => {
        newNotification('Email enviado com sucesso!')
        emptyEmailBody()

        //LocalStorage
        localStorage.setItem(emailKey, 'ok')
    }, {once: true})
    
    // Arquivos Anexados
    
    if (attachmentElements) {
        sendEmailBody.appendChild(attachmentElements)
    }
    
    // Elementos que compõe a parte do conteúdo do email
    sendEmailBody.appendChild(contentElements)
    document.body.appendChild(sendEmailBody)
    addBlurBackground()
    open.play()
}

// Renderizar emails de acordo com o perfil

function renderEmailsPreview(profile) {
    const chatEmails = document.querySelector('#chat-emails')
    const previews = document.querySelectorAll('#chat-emails > div')
    const writeEmailIcon = document.querySelector('#escrever-email')
    //Limpando o container com as prévias dos emails
    previews.forEach(preview => {
        if(preview !== writeEmailIcon) {
            preview.remove()
        }
    })

    

    // Adicionando todas as prévias dos emails do perfil
    profile.emails.forEach(email => {
        chatEmails.appendChild(email.preview)
    })
}

// Notifica o usuário caso não tenha um email a ser enviado.

const writeEmailIcon = document.querySelector('#escrever-email')

writeEmailIcon.addEventListener('click', () => {
    if (sendEmailBody.innerHTML === '') {
        newNotification('Você não tem o que enviar no momento!')
    }
})

export { displayEmail, writeEmail, renderEmailsPreview }