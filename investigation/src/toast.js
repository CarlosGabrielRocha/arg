//Notificação temporária na tela

import { createElement, createTextElement } from "./create-elements.js"
import { notification } from "./sounds-effects.js"

const notificationsBody = createElement('div', 'notifications-body')
document.body.appendChild(notificationsBody)

function newNotification(...messages) {

    messages.forEach(async (msg, indexof) => {
      
        const notificationBox = createElement('div', '', 'notification-box')
        const messageP = createTextElement('p')
        messageP.innerText = msg
        notificationBox.appendChild(messageP)
        // Fará com que as notificações não apareçam todas ao mesmo tempo.
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000 * indexof)
        })

        notification.play()
        navigator.vibrate(1000)
        notificationsBody.appendChild(notificationBox)

        //Remoção da notificação

        const timeoutId = setTimeout(() => {
            notificationBox.remove()
        }, 1000 * 6) // após 6 segundo a caixa de notificação é removida da página

        notificationBox.addEventListener('click', () => {
            notificationBox.remove()
            clearTimeout(timeoutId)
        })
    })
    
}

/* function removeNotifications() {
    notificationsBody.innerHTML = ''
}
 */
export { newNotification }
