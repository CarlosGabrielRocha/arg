
function addBlurBackground() {
/*     const screens =  document.querySelectorAll('.tela')
    screens.forEach(screen => screen.classList.add('blurElement')) */
    document.body.classList.add('blurElement')
}

function removeBlurBackground() {
/*     const screens =  document.querySelectorAll('.tela')
    screens.forEach(screen => screen.classList.remove('blurElement')) */
    document.body.classList.remove('blurElement')
}

export {addBlurBackground, removeBlurBackground}