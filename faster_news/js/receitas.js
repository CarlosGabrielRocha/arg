
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
