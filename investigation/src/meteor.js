const meteor = document.createElement('div')
meteor.id = 'meteor'
meteor.style.zIndex = '-1'
document.body.appendChild(meteor)


function restartMeteorAnimation() {
    meteor.classList.toggle('meteor')
}

export {restartMeteorAnimation}