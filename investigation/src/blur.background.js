
function addBlurBackground() {
    const screens =  document.querySelectorAll('.tela')
    screens.forEach(screen => screen.classList.add('blurElement'))
}

function removeBlurBackground() {
    const screens =  document.querySelectorAll('.tela')
    screens.forEach(screen => screen.classList.remove('blurElement'))
}

export {addBlurBackground, removeBlurBackground}