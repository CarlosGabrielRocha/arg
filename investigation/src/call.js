import { createElement, createTextElement, createImg } from "./create-elements.js"
import { callRing, endingCall } from "./sounds-effects.js"
import { answerCall } from "./active-call.js"

const main = document.querySelector('main')

// Corpo da ligação

const callScreenBody = createElement('div', 'call-body', 'call-body')

// Parte de cima da ligação

const callScreenTop = createElement('div', 'call-top', 'call-top')

// Parte de baixo da ligação

const callScreenBottom = createElement('div', 'call-bottom', 'call-bottom')

// Título e subtítulo da ligação

const callTitle = createTextElement('h1', 'Desconhecido')

const callSubtitle = createTextElement('p', 'Ligação recebida')

// Perfil de quem está ligando

const profile = createElement('div', 'profile', 'profile')

const profileImg = createImg('../midia/call/ligacao_perfil.svg')

profile.appendChild(profileImg)

// Recusar ligação

const declineCallIcon = createElement('div', 'decline-call', 'decline-call', 'call-icon')

const declineCallFilling = createElement('div', 'decline-call-filling', 'decline-call-filling')

const declineCallImg = createImg('../midia/call/aceitar_recusar_ligacao.svg')

const declineCallP = createTextElement('p', 'Recusar')

declineCallFilling.appendChild(declineCallImg)
declineCallIcon.append(declineCallFilling, declineCallP)

// Aceitar ligação

const acceptCallIcon = createElement('div', 'accept-call', 'accept-call', 'call-icon')

const acceptCallFilling = createElement('div', 'accept-call-filling', 'accept-call-filling')

const acceptCallImg = createImg('../midia/call/aceitar_recusar_ligacao.svg')

const acceptCallP = createTextElement('p', 'Aceitar')

acceptCallFilling.appendChild(acceptCallImg)
acceptCallIcon.append(acceptCallFilling, acceptCallP)

// Função para iniciar ligação recebida

function incomingCall(callType = 'voice', title = 'Desconhecido', src = '', callKey) {

    callRing.play()
    callTitle.innerText = title

    callScreenTop.append(callTitle, callSubtitle, profile)
    callScreenBottom.append(declineCallIcon, acceptCallIcon)
    callScreenBody.append(callScreenTop, callScreenBottom)
    main.appendChild(callScreenBody)

   acceptCallIcon.addEventListener('click', () => {
        callScreenBody.remove()
        callRing.pause()
        answerCall(callType, title, src)

        // localstorage
        localStorage.setItem(callKey, 'ok')
    }, { once: true }) // O evento será removido após ser ativado uma vez.

}

// Recusar ligação

declineCallIcon.addEventListener('click', () => {
    callRing.pause()
    endingCall.play()

    endingCall.addEventListener('ended', () => {
        callScreenBody.remove()
    }, { once: true })

})


export { incomingCall, callScreenBody}

