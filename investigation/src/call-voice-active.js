import { createElement, createTextElement, createImg, createMidiaElement } from "./create-elements.js"
import { endingCall } from "./sounds-effects.js"
const main = document.querySelector('main')

// Corpo da ligação ativa

const activeCallBody = createElement('div', 'active-call-body', 'active-call-body')

// Topo da ligação ativa

const activeCallTop = createElement('div', 'active-call-top', 'active-call-top')

// Centro da ligação ativa

const activeCallCenter = createElement('div', 'active-call-center', 'active-call-center')

// Embaixo da ligação ativa

const activeCallBottom = createElement('div', 'active-call-bottom', 'active-call-bottom')

// Título da ligação

const callTitle = createTextElement('h1')

// Perfil de quem está ligando

const profile = createElement('div', 'active-call-profile', 'active-call-profile')

const profileImg = createImg('../midia/call/ligacao_perfil.svg')

profile.appendChild(profileImg)

// Ícone de mutar a ligação

const mutecallIcon = createElement('div', 'mutecall-icon', 'mutecallIcon', 'active-call-icon')

const mutecallFilling = createElement('div', 'mutecall-filling', 'mutecall-filling', 'active-call-icon-filling')

const mutecallImg = createImg('../midia/call/ligacao_mutar.svg')

const mutecallP = createTextElement('p', 'Mutar')

mutecallFilling.appendChild(mutecallImg)
mutecallIcon.append(mutecallFilling, mutecallP)

// Ícone do teclado da ligação

const keyboardIcon = createElement('div', 'keyboard-icon', 'keyboard-icon', 'active-call-icon')

const keyboardFilling = createElement('div', 'keyboard-filling', 'keyboard-filling', 'active-call-icon-filling')

const keyboardImg = createImg('../midia/call/ligacao_teclado_icone.svg')

const keyboardP = createTextElement('p', 'Teclado')

keyboardFilling.appendChild(keyboardImg)
keyboardIcon.append(keyboardFilling, keyboardP)

// Ícone do vivavoz da ligação

const speakerphoneIcon = createElement('div', 'speakerphone-icon', 'speakerphone-icon', 'active-call-icon')

const speakerphoneFilling = createElement('div', 'speakerphone-filling', 'speakerphone-filling', 'active-call-icon-filling')

const speakerphoneImg = createImg('../midia/call/ligacao_vivavoz.svg')

const speakerphoneP = createTextElement('p', 'Viva-voz')

speakerphoneFilling.appendChild(speakerphoneImg)
speakerphoneIcon.append(speakerphoneFilling, speakerphoneP)

// Encerrar ligação

const finishCallIcon = createElement('div', 'finish-call', 'finish-call', 'active-call-icon')

const finishCallFilling = createElement('div', 'finish-call-filling', 'finish-call-filling')

const finishCallImg = createImg('../midia/call/aceitar_recusar_ligacao.svg')

const finishCallP = createTextElement('p')

finishCallFilling.appendChild(finishCallImg)
finishCallIcon.append(finishCallFilling, finishCallP)

// Adicionando os elementos

activeCallTop.append(callTitle, profile)
activeCallCenter.append(mutecallIcon, keyboardIcon, speakerphoneIcon)
activeCallBottom.append(finishCallIcon)

// Audio e vídeo

const audio = createMidiaElement('audio', '')

audio.addEventListener('ended', () => {
    finishCall()
})

const video = createMidiaElement('video', '')
video.classList.add('call-video') 

video.addEventListener('ended', () => {
    finishCall()
})


function answerVoiceCall(type = 'voice', title, src) {
    callTitle.innerText = title
    main.appendChild(activeCallBody)

    if (type === 'voice') {
        audio.src = src
        activeCallBody.append(activeCallTop, activeCallCenter, activeCallBottom, audio)
        audio.play()

    } else if (type === 'video') {
        video.src = src
        activeCallBody.append(video, activeCallBottom)
        video.play()
    }
        
}

finishCallIcon.addEventListener('click', () => {
    finishCall()
})

function finishCall() {
    endingCall.play()

    endingCall.addEventListener('ended', () => {
        activeCallBody.innerHTML = ''
        activeCallBody.remove()
    }, {once: true})

}


export { answerVoiceCall }