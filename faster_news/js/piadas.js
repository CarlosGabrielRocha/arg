
function resposta1() {
    let res = document.querySelector('div.resposta1');
    let video = document.querySelector('iframe.rir1');
    if (video.style.display == 'none') {
        res.innerHTML = `Quando ela está aprendendo uma nova língua.`;
        video.style.display = 'block';
    } else {
        res.innerHTML = 'Resposta';
        video.style.display = 'none';
    }
    
}

function resposta2() {
    let res = document.querySelector('div.resposta2');
    let video = document.querySelector('iframe.rir2');
    if (video.style.display == 'none') {
        res.innerHTML = `Elas contam PIAdas`;
        video.style.display = 'block';
    } else {
        res.innerHTML = 'Resposta';
        video.style.display = 'none';
    }
    
}

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
