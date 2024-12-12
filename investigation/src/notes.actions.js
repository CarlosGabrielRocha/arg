import { addBlurBackground, removeBlurBackground } from "./blur.background.js"
import { open } from "./sounds-effects.js"
const notesIcons = document.querySelectorAll('.nota')

// Criação e estilos dos elementos que vão formar a nota

const div = document.createElement('div')
div.id = 'noteInfo'
div.className = 'overlayScreen'

const p1 = document.createElement('p')

const p2 = document.createElement('p')

const imgNote4 = document.createElement('img')
/* imgNote4.src = "../midia/medico_original.png" */
imgNote4.style.display = 'none' 

ElementsStyle()

function ElementsStyle() {

    div.style.position = 'absolute'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.style.width = '27em'
    div.style.height = '21em'
    div.style.fontSize = '0.8em'
    div.style.textAlign = 'start'
    div.style.padding = '15px'
    div.style.borderRadius = '10px'
    div.style.backgroundColor = '#000000ea'
    div.style.color = 'white'
    div.style.zIndex = '100'
    div.style.backdropFilter = 'blur(20px)'


    p1.style.marginBottom = '15px'
    p1.style.width = '95%'
    p2.style.width = '95%'

    imgNote4.style.maxWidth = "150px"
    imgNote4.style.pointerEvents = 'none'
    
}

// Condicional para cada nota.

function handleNotesClick() {

    notesIcons.forEach(note => note.addEventListener('click', (ev) => {
        const noteClicked = ev.currentTarget
        const p = noteClicked.querySelector('p')
    
       /* switch(p.textContent) {
    
            case 'Note 1':
                p1.innerText = 'Hoje é o dia mais triste da minha vida, pois te perdi, minha princesinha. Não sei o que eu faço, aquela que me prometeu confiância até a morte, tirou você de mim.'
                p2.innerText = 'Eles estão a minha procura, mas eu não tenho medo deles. Mesmo que eu não veja nada, andando pelas sombras, pelos galhos e a mata escura, mesmo que neste momento uma neblina turve a minha visão, eu vou te encontrar, eu prometo.'
                break
    
            case 'Note 2':
                p1.innerText = 'A polícia bateu na minha porta à tarde, pra eles eu sou um dos suspeitos do seu desaparecimento.'
                p2.innerText = 'Como eu seria capaz de te fazer algum mal?'
                break
    
            case 'Note 3':
                p1.innerText = 'Ouso passos circulando pela casa à noite toda, estou ficando louco? Não. Tenho absoluta certeza que são eles.'
                p2.innerText = 'Mas isso não importa, eu não tenho medo deles. Hoje eu sinto que eu estou a um passo mais próximo de te encontrar. Me pergunto como você está nesse momento.. Com frio, com fome, com medo desses monstros.'
                break
    
            case 'Note 4':
                p1.innerText = 'Interessante..'
                p2.innerText = ''
                imgNote4.style.display = 'block'
                break
    
            case 'Note 5':
                p1.innerText = 'Quem são eles? Por que eles importam tanto assim? Esses nomes.. Eu vou encontra-lôs.'
                p2.innerText = ''
    
        } */ 
    
        appendElements()
        addBlurBackground()
        open.play()
    }))
    
}

// Remover Elementos

function displayNoneToElements() {

    div.addEventListener('click', () => {
        div.style.display = 'none'
        imgNote4.style.display = 'none'
        removeBlurBackground()
    })

}

// Adicionar Elementos ao DOM

function appendElements() {
    div.append(p1, p2, imgNote4)
    document.body.appendChild(div)
    div.style.display = 'flex'
}

// Configurações de Tamanho de telas

const others = window.matchMedia('(min-width: 769px)')
const smallTablets = window.matchMedia('(min-width: 576px)')

smallTablets.addEventListener('change', windowConfig)
others.addEventListener('change', windowConfig)

function windowConfig() {
    
    if (others.matches) {

        imgNote4.style.maxWidth = "230px"
        div.style.fontSize =  '0.9rem'
        div.style.width = '33em'
        div.style.height = '28em'

    } else if (smallTablets.matches) {

        imgNote4.style.maxWidth = "200px"
        div.style.fontSize =  '0.9rem'
        div.style.width = '30em'
        div.style.height = '25em' 

    } else {
        ElementsStyle()
    }

}


windowConfig()
displayNoneToElements()

export { handleNotesClick }