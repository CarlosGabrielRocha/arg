import { cameraEvents} from "./cameras.actions.js"
import { openIcon, exitIcon } from "./icons.actions.js"
import { handleNotesClick } from "./notes.actions.js"
import { changePhoneDate } from "./phone.date.js"
import { restartMeteorAnimation } from "./meteor.js"
import { incomingCall } from "./call.js"
import { newNotification } from "./toast.js"
import "./dial.actions.js"
import './chat/create-emails.js'

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

////////////////////// LIGAÇÕES //////////////////////////

/* setTimeout(() => {
    incomingCall('voice', 'Desconhecido', '../midia/call/voz_placeholder.mp3')
}, 1000) */

/* setTimeout(() => {
    incomingCall('video', 'Hacker', '../midia/call/video_placeholder.mp4')
}, (1000 * 60) * 2)  */


////////////////////// NOTIFICAÇÕES //////////////////////////


window.addEventListener('load', () => {
    newNotification('Você tem novas mensagens!', 'Novo Email recebido!', 'A câmera foi instalada com sucesso!' )
})



openIcon()
exitIcon()
handleNotesClick()
cameraEvents()












