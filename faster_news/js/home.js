
var data = new Date();
var diasem = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
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
var sistema = document.querySelector('div#data');
sistema.innerHTML = `${diasem}, ${dia} de ${mes}.`;

//menu

function ClickMenu(){

    if (opcoes.style.display == 'block'){
        opcoes.style.display = 'none';
    } else {
        opcoes.style.display = 'block';
    }
}

function Tamanho() {
    if (window.innerWidth > 768) {
        opcoes.style.display = 'none';
    }
}

//audio

function ExecAudio() {
var play = document.getElementById('playaudio');
playaudio.play();
}

// news

function noticiaOne() {
    new1.style.display = "flex";
}

function noticiaTwo() {
    new2.style.display = "flex";
}

function sair() {
    new1.style.display = "none";
    new2.style.display = "none";
}

// Mensagem do hacker

document.body.addEventListener('click', () => {
    const div = document.createElement('div')
    div.classList = 'hacker-message'
    const img = document.createElement('img')
    img.src = 'imagens/hacker.svg'
    const span = document.createElement('span')
    span.innerText = 'random54787@...'
    div.append(img, span)
    setTimeout(() => {
        document.body.appendChild(div)
    }, 10000)

    const timeOutId = setTimeout(() => {
        div.remove()
    }, 10200)

    div.addEventListener('click', () => {
        clearTimeout(timeOutId)
    }, {once: true})
}, {once: true})