import { openIcon, exitIcon } from "./icons.actions.js"
import { handleNotesClick } from "./notes.actions.js"
import changePhoneDate from "./phone.date.js"
import './styles/index.css'
import './styles/others.css'
import './styles/small.tablets.css'



setInterval(changePhoneDate, '1000')




changePhoneDate()
openIcon()
exitIcon()
handleNotesClick()











