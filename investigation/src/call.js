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

function incomingCall(callType = 'voice', title = 'Desconhecido', src = '') {

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
    }, { once: true }) // O evento será removido após ser ativado uma vez.

}

// Função para ligar para alguém

/* function callSomeone(validNumbers, numberToCall) {
    const number = validNumbers.filter(element => element.number === numberToCall)
    
    callTitle.innerText = numberToCall

    callScreenTop.append(callTitle, callSubtitle)

    callScreenBottom.append(declineCallIcon)
    callScreenBottom.classList.add('call-someone-bottom')
    callScreenBottom.classList.remove('incomming-call-bottom')
    declineCallIcon.classList.remove('call-icon')

    callScreenBody.append(callScreenTop, callScreenBottom)
    main.appendChild(callScreenBody)

    if (number.length > 0) {
        callSubtitle.innerText = 'chamando..'
        setTimeout(() => {
            activeCall('voice', numberToCall, number[0].src)
        }, 1000 * 8)
    } else {
        callSubtitle.innerText = 'ligando..'
        setTimeout(() => {
            callScreenBody.remove()
            endingCall.play()
        }, 1000 * 4)
    }

} */

// Ligação ativa

/* function activeCall(callType, title = '', src) {
    callScreenBody.remove()
    callRing.pause()
    answerCall(callType, title, src)
}
 */

// Recusar ligação

declineCallIcon.addEventListener('click', () => {
    callRing.pause()
    endingCall.play()

    endingCall.addEventListener('ended', () => {
        callScreenBody.remove()
    }, { once: true })

})


export { incomingCall, callScreenBody}

