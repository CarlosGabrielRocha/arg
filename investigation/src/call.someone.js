import { endingCall, calling, outOfService } from "./sounds-effects.js"
import { createElement, createTextElement, createImg } from "./create-elements.js"
import { answerCall } from "./active-call.js"

const main = document.querySelector('main')

// Corpo da ligação

const callingSomeoneBody = createElement('div', 'calling-body', 'call-body')

// Parte de cima da ligação

const callingSomeoneTop = createElement('div', 'calling-top', 'call-top')

// Parte de baixo da ligação

const callingSomeoneBottom = createElement('div', 'calling-bottom', 'calling-bottom')

// Título e subtítulo da ligação

const callingSomeoneTitle = createTextElement('h1', 'Desconhecido')

const callingSomeoneSubtitle = createTextElement('p', 'Ligação recebida')

// Perfil do destinatário

const profile = createElement('div', 'calling-profile', 'calling-profile')

const profileImg = createImg('../midia/call/ligacao_perfil.svg')

profile.appendChild(profileImg)

// Parar de ligar ícone

const stopCallingIcon = createElement('div', 'stop-calling', 'stop-calling-icon')

const stopCallingFilling = createElement('div', 'stop-calling-filling', 'stop-calling-filling')

const stopCallingImg = createImg('../midia/call/aceitar_recusar_ligacao.svg')

stopCallingFilling.appendChild(stopCallingImg)
stopCallingIcon.append(stopCallingFilling)

// Função para ligar para alguém

function callSomeone(validNumbers, numberToCall) {
    const number = validNumbers.filter(element => element.number === numberToCall)
    
    callingSomeoneTitle.innerText = numberToCall
    callingSomeoneTop.append(callingSomeoneTitle, profile, callingSomeoneSubtitle)
    callingSomeoneBottom.append(stopCallingIcon)
    callingSomeoneBody.append(callingSomeoneTop, callingSomeoneBottom)
    main.appendChild(callingSomeoneBody)

    if (number.length > 0) {
        callingSomeoneSubtitle.innerText = 'chamando..'
        calling.currentTime = 0
        calling.play()
        calling.addEventListener('ended', startCall, {once: true})

        stopCallingIcon.addEventListener('click', () => {
            calling.removeEventListener('ended', startCall)
        }, {once: true}) 
    } else {
        callingSomeoneSubtitle.innerText = 'ligando..'
        outOfService.currentTime = 0
        outOfService.play()
        outOfService.addEventListener('ended', () => {
            stopCalling()
        }, {once: true})
    }

    function startCall() {
        callingSomeoneBody.remove()
        answerCall('voice', numberToCall, number[0].src)
    }

}

stopCallingIcon.addEventListener('click', stopCalling)

function stopCalling() {
    outOfService.pause()
    calling.pause()
    endingCall.play()
    callingSomeoneBody.remove()
}

export {callSomeone}