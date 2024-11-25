//Notificação temporária na tela

import { createElement, createTextElement } from "./create-elements.js"

const notifications = createElement('div', 'notifications')
document.body.appendChild(notifications)

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
        navigator.vibrate(1000)
        notifications.appendChild(notificationBox)
        setTimeout(() => {
            notificationBox.remove()
        }, 1000 * 6) // após 6 segundo a caixa de notificação é removida da página
    })
}

export { newNotification }
