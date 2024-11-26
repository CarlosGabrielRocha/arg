import endingCallSound from "./assets/encerrando_ligacao.mp3"
import callRingSound from "./assets/recebendo_ligacao.mp3"
import callingSound from "./assets/ligando.mp3"
import outOfServiceSound from "./assets/foradearea.mp3"
import changeCameraSound from "./assets/mudar_camera.mp3"
import notificationSound from "./assets/notificacao.mp3"
import emailSentSound from "./assets/email_enviado.mp3"
import openSound from "./assets/abrir.mp3"

import digit1Sound from "./assets/digits/digit1.mp3"
import digit2Sound from "./assets/digits/digit2.mp3"
import digit3Sound from "./assets/digits/digit3.mp3"
import digit4Sound from "./assets/digits/digit4.mp3"
import digit5Sound from "./assets/digits/digit5.mp3"
import digit6Sound from "./assets/digits/digit6.mp3"
import digit7Sound from "./assets/digits/digit7.mp3"
import digit8Sound from "./assets/digits/digit8.mp3"
import digit9Sound from "./assets/digits/digit9.mp3"
import digit0Sound from "./assets/digits/digit0.mp3"
import digitAsteriskSound from "./assets/digits/digit_asterisk.mp3"
import digitHashSound from "./assets/digits/digit_hash.mp3"

import { createMidiaElement } from "./create-elements.js"


const endingCall = createMidiaElement
(
    'audio',
    endingCallSound,
    ['preload', 'auto']
)

const callRing = createMidiaElement
(
    'audio',
    callRingSound,
    ['preload', 'auto'],
    ['loop', '']
)

const calling = createMidiaElement
(
    'audio',
    callingSound,
    ['preload', 'auto']
)

const outOfService = createMidiaElement
(
    'audio',
    outOfServiceSound,
    ['preload', 'auto']
)

const changeCamera = createMidiaElement
(
    'audio',
    changeCameraSound,
    ['preload', 'auto']
)

const digitsSoundsSrc = [
    digit1Sound,
    digit2Sound,
    digit3Sound,
    digit4Sound,
    digit5Sound,
    digit6Sound,
    digit7Sound,
    digit8Sound,
    digit9Sound,
    digit0Sound,
    digitAsteriskSound,
    digitHashSound
]

const digitsSoundsArray = digitsSoundsSrc.map((digitSrc, indexof) => {
    const audio = createMidiaElement('audio', digitSrc, ['preload', 'auto'])
    document.body.appendChild(audio)

    return audio
})

const notification = createMidiaElement
(
    'audio',
    notificationSound,
    ['preload', 'auto']
)

const open = createMidiaElement
(
    'audio',
    openSound,
    ['preload', 'auto']
)

document.body.append( endingCall, callRing, calling, outOfService, changeCamera, notification, open)

export {endingCall, callRing, calling, outOfService, digitsSoundsArray, changeCamera, notification, open}


