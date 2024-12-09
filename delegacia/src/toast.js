//Notificação temporária na tela
import { createElement, createTextElement } from "./create-elements.js"

const notificationsBody = createElement('div', 'notifications-body')
document.body.appendChild(notificationsBody)

function newNotification(message) {

    if (notificationsBody.children.length < 1) {

        const notificationBox = createElement('div', '', 'notification-box')
        const messageP = createTextElement('p')
        messageP.innerText = message
        notificationBox.appendChild(messageP)

        notificationsBody.appendChild(notificationBox)

        //Remoção da notificação

        const timeoutId = setTimeout(() => {
            notificationBox.remove()
        }, 1000 * 6) // após 6 segundo a caixa de notificação é removida da página

        notificationBox.addEventListener('click', () => {
            notificationBox.remove()
            clearTimeout(timeoutId)
        })

    }

}

/* function removeNotifications() {
    notificationsBody.innerHTML = ''
}
 */
export { newNotification }
