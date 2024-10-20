const containerForMeteor = document.createElement('section')
containerForMeteor.style.position = 'absolute'
containerForMeteor.style.width = '100vw'
containerForMeteor.style.height = '100vh'
containerForMeteor.style.overflow = 'hidden'
containerForMeteor.style.zIndex = '-1'

const meteor = document.createElement('div')
meteor.id = 'meteor'

document.body.appendChild(containerForMeteor)
containerForMeteor.appendChild(meteor)


function restartMeteorAnimation() {
    meteor.classList.toggle('meteor')
}

export { restartMeteorAnimation }