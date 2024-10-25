const inputTyped = document.querySelector('#discados > input')
const digitIcons = document.querySelectorAll('.digito-caixa')
const cleanDigitIcon = document.querySelector('#apagar-digito')

digitIcons.forEach(digit => digit.addEventListener('click', handleClick))

function handleClick(ev) {
    const character = ev.currentTarget.dataset.digit
    inputTyped.value += character
    changeCleanIconState()
}

inputTyped.addEventListener('keydown', ev => {
    ev.preventDefault()
})

cleanDigitIcon.addEventListener('click', cleanDigit)
cleanDigitIcon.addEventListener('mousedown', () => {
   const intervalId = setInterval(cleanDigit, 150)

   cleanDigitIcon.addEventListener('mouseout', () => {
        clearInterval(intervalId)
   }, { once: true })

      cleanDigitIcon.addEventListener('mouseup', () => {
        clearInterval(intervalId)
   }, { once: true })

})

cleanDigitIcon.addEventListener('touchstart', () => {
   const intervalId = setInterval(cleanDigit, 150)

   cleanDigitIcon.addEventListener('touchend', () => {
        clearInterval(intervalId)
   }, { once: true })

})



function cleanDigit() {
    const currentlyValue = inputTyped.value
    inputTyped.value = currentlyValue.slice(0, -1)
    changeCleanIconState()
}

function changeCleanIconState() {
    if (inputTyped.value.length === 0) {
        cleanDigitIcon.style.opacity = '0'
    } else {
        cleanDigitIcon.style.opacity = '1'
    }
}



export { digitIcons }
