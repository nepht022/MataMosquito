var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempoMosquito = 1250
const audio = new Audio('imagens/hitmark.mp3')
audio.volume=0.6

var nivel = window.location.search.replace('?', '')
if(nivel=="facil"){
    tempoMosquito = 1750
}else if(nivel=="normal"){
    tempoMosquito = 1250
}else if(nivel=="dificil"){
    tempoMosquito = 750
}

function ajustaTamanhoTela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoTela()

var cronometro = setInterval(
    function(){
        if(tempo == 0){
            clearInterval(cronometro)
            clearInterval(posRandomica)
            window.location.href="vitoria.html"
        }else{
            tempo--
            document.getElementById("valorTempo").innerHTML = tempo
        }
    }, 1000)

function posicaoRandomica(){
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove()

        if(vidas>3){
            window.location.href="game_over.html"
        }else{
            document.getElementById("vida"+vidas).src="imagens/coracao_vazio.png"
            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random()*largura) - 90
    var posicaoY = Math.floor(Math.random()*altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)
    
    /*Criando o elemento html*/
    var mosquito = document.createElement("img")

    mosquito.src = "imagens/mosca.png" 
    mosquito.className= tamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.position = "absolute"
    mosquito.style.left = posicaoX+"px"
    mosquito.style.top = posicaoY+"px"
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        audio.play()
        this.remove()
    }
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

