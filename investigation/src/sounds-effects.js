import { createMidiaElement } from "./create-elements.js"

const endingCall = createMidiaElement
(
    'audio',
    '../midia/call/encerrando_ligacao.mp3',
    ['preload', 'auto']

)

const callRing = createMidiaElement
(
    'audio',
    '../midia/call/recebendo_ligacao.mp3',
    ['preload', 'auto'],
    ['loop', '']
)

document.body.append( endingCall, callRing)

export {endingCall, callRing}


