const meteor = document.createElement('div')
meteor.id = 'meteor'
document.body.appendChild(meteor)


function restartAnimation() {
    meteor.classList.toggle('meteor')
}


setInterval(restartAnimation, 10000)
