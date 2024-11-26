const dayjs = require('dayjs')
require('dayjs/locale/pt-br.js')
dayjs.locale('pt-br')
const customParseFormat = require('dayjs/plugin/customParseFormat.js')
dayjs.extend(customParseFormat)

const pHour = document.getElementById('hora')
const pDate = document.getElementById('data')

function changePhoneDate() {
    pHour.innerText = `${dayjs().format('HH')}:${dayjs().format('mm')}`  
    pDate.innerText = `${dayjs().format('dddd')}, ${dayjs().format('DD')} ${dayjs().format('MMMM')}.`
}

function cameraDate(element) {
    element.innerText = `${dayjs().format('DD/MM/YYYY')} ${dayjs().format('HH')}-${dayjs().format('mm')}-${dayjs().format('ss')}`
}

export { changePhoneDate, cameraDate }