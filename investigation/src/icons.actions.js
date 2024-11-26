const exitScreen = document.querySelectorAll('.telaTopo > .sair') 
const screens = document.querySelectorAll('.tela')
const phoneIcons = document.querySelectorAll('.icone')

// fechar tela

function exitIcon() {

    exitScreen.forEach(exitIcon => {
        exitIcon.addEventListener('click', (event) => {
            const x = event.currentTarget
            screens.forEach(screen => {
                if (x.dataset.screen === screen.dataset.screen) {
                    screen.style.display = 'none'
                }
            })
        })
    })

}



// abrir tela

function openIcon() {

    phoneIcons.forEach( icon => {
        icon.addEventListener('click', event => {
            const iconSelected = event.currentTarget
            const img = iconSelected.querySelector('div.imagemIcone')
             
            screens.forEach(screen => {
                if (iconSelected.dataset.screen === screen.dataset.screen && img.classList.contains('ativo')) {
                    screen.style.display = 'flex'
                }
            })
        }) 
    })
}

export {openIcon, exitIcon}

