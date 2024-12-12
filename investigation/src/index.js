import { cameraEvents } from "./cameras.actions.js"
import { openIcon, exitIcon } from "./icons.actions.js"
import { handleNotesClick } from "./notes.actions.js"
import { changePhoneDate } from "./phone.date.js"
import { restartMeteorAnimation } from "./meteor.js"
import { incomingCall } from "./call.js"
import { newNotification } from "./toast.js"
import "./dial.actions.js"

//chat
import "./chat/create-emails.js"
import { Email } from "./chat/Email.js";
import { Profile } from "./chat/Profile.js"
import { writeEmail } from "./chat/emails.actions.js";

import './styles/index.css'
import './styles/screens.css'
import './styles/meteor.css'
import './styles/call.css'
import './styles/active-call.css'
import './styles/call.someone.css'
import './styles/chat.css'
import './styles/toast.css'
import './styles/small.tablets.css'
import './styles/others.css'

setInterval(changePhoneDate, 1000)
setInterval(restartMeteorAnimation, 20000)

openIcon()
exitIcon()
handleNotesClick()
cameraEvents()

// Desativa o botão direito do mouse
/* document.addEventListener('contextmenu', (ev) => ev.preventDefault()) */


let calls = [] // {key, value}
let sentEmails = []
let receivedEmails = []
let notifications = []

/* Atualizando os arrays espelhos do LocalStorage */

export function updateStorageArrays() {
    calls = []
    sentEmails = []
    notifications = []
    for (let c = 1; c < localStorage.length; c++) {
        const key = localStorage.key(c - 1)
        if (key === `stalker-call_00${c}`) {
            calls.push({ key: key, value: localStorage.getItem(key) })
        } else if (key === `email_00${c}`) {
            sentEmails.push({ key: key, value: localStorage.getItem(key) })
        } else if (key === `notifications_00${c}`) {
            notifications.push({ key: key, value: localStorage.getItem(key) })
        } else if (key === `stalker-email_00${c}`) {
            receivedEmails.push({ key: key, value: localStorage.getItem(key) })
        }
    }
}

updateStorageArrays()

////////////////////// LIGAÇÕES //////////////////////////

/* EXEMPLO: */

/* KEY = call_number ...... VALUE = pending ou done */

// O LocalStorage é atualizado na função incomingCall passando a chave.


/* if (!localStorage.getItem('callKey')) { // Se a ligação não existir, ela será criada como pendente.
    localStorage.setItem('callKey', 'pending')
    updateStorageArrays()
}

if (localStorage.getItem('callKey') === 'pending') { // Se a ligação for pendente, ela ocorrerá.
    setTimeout(() => {
        incomingCall('voice', 'Desconhecido', '../midia/call/voz_placeholder.mp3', 'callKey')
    }, 1000 * 18)
} */

if (!localStorage.getItem('stalker-call_001')) {
    localStorage.setItem('stalker-call_001', 'pending')
}

if (localStorage.getItem('stalker-call_001') === 'pending') {
    setTimeout(() => {
        incomingCall('voice', 'Desconhecido', '../midia/call/call1.mp3', 'stalker-call_001')
    }, 1000 * 200)
} 

////////////////////// NOTIFICAÇÕES //////////////////////////

 if (!localStorage.getItem('notifications_001')) {
    localStorage.setItem('notifications_001', 'pending')
}

if (localStorage.getItem('notifications_001') === 'pending') {
    document.addEventListener('click', () => {
    newNotification('Você tem novas mensagens!')
    localStorage.setItem('notifications_001', 'ok')
    }, {once: true})
} 

//

if (!localStorage.getItem('notifications_002')) {
    localStorage.setItem('notifications_002', 'pending')
}

if (localStorage.getItem('notifications_002') === 'pending') {
    setTimeout(() => {
        newNotification('Você tem novas mensagens!')
        localStorage.setItem('notifications_002', 'ok')
    }, 1000 * 90)     
} 

//

if (!localStorage.getItem('notifications_003')) {
    localStorage.setItem('notifications_003', 'pending')
}

if (localStorage.getItem('notifications_003') === 'pending') {
    setTimeout(() => {
        newNotification('Você tem novas mensagens!')
        localStorage.setItem('notifications_003', 'ok')
    }, 1000 * 120)     
} 


////////////////////// EMAILS ENVIADOS //////////////////////////

// Criar envio de Email (só pode haver um email por vez)
// O LocalStorage é atualizado na função writeEmail passando a chave.

/*  if (!localStorage.getItem('email_001')) {
    localStorage.setItem('email_001', 'pending')
}
 */


/* if (localStorage.getItem('email_001') === 'pending') {
    const writedEmail = new Email('sent', 'O que foi isso??', ['Eu acho que aqui não é tão seguro como você disse.. O que era aquela coisa?'])

    const writeEmailIcon = document.querySelector('#escrever-email')
    writeEmailIcon.addEventListener('click', () => {
        writeEmail(writedEmail.subject, writedEmail.content, writedEmail.attachment, Profile.profiles.hacker, 'email_001')
    }, { once: true })
} */











