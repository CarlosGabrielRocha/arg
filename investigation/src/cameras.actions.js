import { cameraDate } from "./phone.date.js"

const rightArrow = document.getElementById('proximo')
const leftArrow = document.getElementById('voltar')

const cameraIcon = document.querySelector('#cameras')

const cameraDiv = document.querySelector('#area-camera')

const cameraVideo = document.getElementById('camera')

const exit = document.querySelector('#telaCamera #sair')

const spanDate = document.createElement('span')
spanDate.classList.add('camerasText')
spanDate.style.top = '2px'
spanDate.style.left = '5px'

const spanCameraNumber = document.createElement('span')
spanCameraNumber.classList.add('camerasText')
spanCameraNumber.style.bottom = '8px'
spanCameraNumber.style.right = '5px'
spanCameraNumber.innerText = 'CH1'

cameraDiv.append(spanDate, spanCameraNumber)

const camerasSrc = [
    '../midia/camera0.mp4',
    '../midia/camera1.mp4',
    '../midia/camera2.mp4',
    '../midia/camera3.mp4'
]

let number = 0

function cameraEvents() {
    
    rightArrow.addEventListener('click', () => {
        number++
        handleNumber()
        changeCameraText()
        cameraVideo.setAttribute('src', camerasSrc[number])
        startVideo()
    })

    leftArrow.addEventListener('click', () => {
        number--
        handleNumber()
        changeCameraText()
        cameraVideo.setAttribute('src', camerasSrc[number])
        startVideo()
    })

    cameraIcon.addEventListener('click', () => {
        startVideo()
        setInterval(() => cameraDate(spanDate), 1000)
        displayBlock()
    })

    exit.addEventListener('click', () => displayNone())
}

function handleNumber() {

    if (number > 3) {
        number = 0
    } else if ( number < 0) {
        number = 3
    }
}

function changeCameraText() {
    const cameraP = document.querySelector('#telaCameras > p')
    cameraP.innerText = `Câmera ${number + 1}`
    spanCameraNumber.innerText = `CH${number + 1}`
}

function startVideo() {
    cameraVideo.play()
}

function displayBlock() {
    cameraVideo.style.display = 'block'
}

function displayNone() {
    cameraVideo.style.display = 'none'
}

export { cameraEvents }