
var data = new Date()
var diasem = data.getDay()
var dia = data.getDate()
var mes = data.getMonth()
switch(diasem) {
    case 0:
        diasem = 'Domingo'
        break
    case 1:
        diasem = 'Segunda-feira'
        break
    case 2:
        diasem = 'Terça-feira'
        break
    case 3:
        diasem = 'Quarta-feira'
        break
    case 4:
        diasem = 'Quinta-feira'
        break
    case 5:
        diasem = 'Sexta-feira'
        break
    case 6:
        diasem = 'Sabádo'
        break
}

switch(mes) {
    case 0:
        mes = 'Janeiro'
        break
    case 1:
        mes = 'Fevereiro'
        break
    case 2:
        mes = 'Março'
        break
    case 3:
        mes = 'Abril'
        break
    case 4:
        mes = 'Maio'
        break
    case 5:
        mes = 'Junho'
        break
    case 6:
        mes = 'Julho'
        break
    case 7:
        mes = 'Agosto'
        break
    case 8:
        mes = 'Setembro'
        break
    case 9:
        mes = 'Outubro'
        break
    case 10: 
        mes = 'Novembro'
        break
    case 11:
        mes = 'Dezembro'
        break
}
var sistema = window.document.querySelector('div#data')
sistema.innerHTML = `${diasem}, ${dia} de ${mes}.`

//menu

function ClickMenu(){

    if (opcoes.style.display == 'block'){
        opcoes.style.display = 'none'
    } else {
        opcoes.style.display = 'block'
    }
}

function Tamanho() {
    if (window.innerWidth > 768) {
        opcoes.style.display = 'none'
    }
}

//piadas.html


function resposta1() {
    let res = document.querySelector('div.resposta1')
    let video = document.querySelector('iframe.rir1')
    if (video.style.display == 'none') {
        res.innerHTML = `Quando ela está aprendendo uma nova língua.`
        video.style.display = 'block'
    } else {
        res.innerHTML = 'Resposta'
        video.style.display = 'none'
    }
    
}

function resposta2() {
    let res = document.querySelector('div.resposta2')
    let video = document.querySelector('iframe.rir2')
    if (video.style.display == 'none') {
        res.innerHTML = `Elas contam PIAdas`
        video.style.display = 'block'
    } else {
        res.innerHTML = 'Resposta'
        video.style.display = 'none'
    }
    
}