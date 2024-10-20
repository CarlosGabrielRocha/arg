import { cameraEvents, cameraNumber } from "./cameras.actions.js"
import { openIcon, exitIcon } from "./icons.actions.js"
import { handleNotesClick } from "./notes.actions.js"
import { changePhoneDate } from "./phone.date.js"
import { restartMeteorAnimation } from "./meteor.js"
import { call } from "./call.js"

import './styles/index.css'
import './styles/small.tablets.css'
import './styles/others.css'
import './styles/meteor.css'
import './styles/call.css'
import './styles/voice-call.css'

setInterval(changePhoneDate, 1000)
setInterval(restartMeteorAnimation, 20000)

setTimeout(() => {
    call('voice', 'Desconhecido', '../midia/call/voz_placeholder.mp3')
}, 1000 * 60)

setTimeout(() => {
    call('video', 'Hacker', '../midia/call/video_placeholder.mp4')
}, (1000 * 60) * 2)

openIcon()
exitIcon()
handleNotesClick()
cameraEvents()












