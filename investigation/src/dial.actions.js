import voicePlaceholder from "./assets/voz_placeholder.mp3"
import { digitsSoundsArray } from "./sounds-effects.js"
import { callSomeone } from "./call.someone.js"

const inputTyped = document.querySelector('#discados > input')
const digitIcons = document.querySelectorAll('.digito-caixa')
const clearDigitIcon = document.querySelector('#apagar-digito')
const exit = document.querySelector('#telaDiscar-sair')

exit.addEventListener('click', clearInput)

// Tratamento dos cliques nos digitos. Ao clicar em um digito, ele será adicionado ao input. 

digitIcons.forEach(digit => digit.addEventListener('click', handleClick))

function handleClick(ev) {
    const character = ev.currentTarget.dataset.digit
    if (inputTyped.value.length < 11) {
        inputTyped.value += character
    }
    
    changeCleanIconState()
}

// Tratamento de limpeza dos digitos ao clicar no botão de limpar digitos com o mouse.

clearDigitIcon.addEventListener('click', clearDigit)

clearDigitIcon.addEventListener('mousedown', () => {

    const intervalId = setInterval(clearDigit, 125)
    let isCleared = false

    // Função para limpar o setinterval e garantir que os listeners serão removidos do mouseout e mouseup.

    const stopIntervalAndRemoveListener = () => {

        if (!isCleared) { // Evita que o setintervalo seja limpo duas vezes.
            clearInterval(intervalId)
            isCleared = true
        }

    }

    clearDigitIcon.addEventListener('mouseout', stopIntervalAndRemoveListener, {once: true})
    clearDigitIcon.addEventListener('mouseup', stopIntervalAndRemoveListener, {once: true})
})

// Tratamento de limpeza dos digitos ao clicar no botão de limpar digitos com o celular.

clearDigitIcon.addEventListener('touchstart', () => {
   const intervalId = setInterval(clearDigit, 125)

   clearDigitIcon.addEventListener('touchend', () => {
        clearInterval(intervalId)
   }, { once: true })

})

// Função que limpa os digitos

function clearDigit() {
    const currentlyValue = inputTyped.value
    inputTyped.value = currentlyValue.slice(0, -1)
    changeCleanIconState()
}

// Função que muda a opacidade do ícone de limpar digitos dependendo se há ou não digitos no input

function changeCleanIconState() {
    if (inputTyped.value.length === 0) {
        clearDigitIcon.style.opacity = '0'
    } else {
        clearDigitIcon.style.opacity = '1'
    }
}

const validNumbers = [
    { number: '024456', src: voicePlaceholder },
    { number: '192', src: voicePlaceholder }
]

// Função para iniciar ligação

document.querySelector('#ligar').addEventListener('click', () => {
    if (inputTyped.value.length >= 3) {
        document.querySelector('#telaDiscar').style.display = 'none'
        callSomeone(validNumbers, inputTyped.value)
        clearInput()
    } 
})

// Limpar Input

function clearInput() {
    inputTyped.value = ''
}

// Adicionando sons ao clicar nos digitos

digitIcons.forEach((icon, indexof) => {
    icon.addEventListener('click', () => {
        digitsSoundsArray[indexof].play()
    })
})


export { digitIcons }
