import { cameraEvents, cameraNumber } from "./cameras.actions.js"
import { openIcon, exitIcon } from "./icons.actions.js"
import { handleNotesClick } from "./notes.actions.js"
import { changePhoneDate } from "./phone.date.js"
import './styles/index.css'
import './styles/small.tablets.css'
import './styles/others.css'




setInterval(changePhoneDate, 1000)
openIcon()
exitIcon()
handleNotesClick()
cameraEvents()











