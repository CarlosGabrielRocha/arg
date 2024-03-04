const p_dias = document.getElementById("dias")
const p_horas = document.getElementById("horas")
const p_min = document.getElementById("minutos")
const p_seg = document.getElementById("segundos")

const anoNovo = '1 jan 2025'

function countdown() {
    const dataAno = new Date(anoNovo)
    const atual = new Date()

    const totalSeg = (dataAno - atual) / 1000

    const dias = Math.floor(totalSeg / 3600 / 24)
    const horas = Math.floor(totalSeg / 3600) % 24
    const min = Math.floor(totalSeg / 60) % 60
    const seg = Math.floor(totalSeg) % 60 

    p_dias.innerHTML = dias
    p_horas.innerHTML = formatTime(horas)
    p_min.innerHTML = formatTime(min)
    p_seg.innerHTML = formatTime(seg)
}

function formatTime(time) {
    return time < 10? `0${time}`: time
}

setInterval(countdown, 1000)
