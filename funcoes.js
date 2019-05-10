var pontuacao = 0;

function verifica() {
    let form = document.getElementsByClassName('formulario');
    let p = form[0];
    for (let i = 0; i < p.length; i++) {
        let input = p[i];
        if (input.name == input.value) pontuacao++;
    }
    pontos();
}

function pontos() {
    if (pontuacao > 0) {
        let div = document.getElementById('pontos');
        div.innerHTML = 'Pontuação: ' + pontuacao;
        //document.body.appendChild(div);
    }
}