//ator
let yAtor = 366;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
 
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3
  }
}


function verificaColisao(){
 // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
    for(let i = 0;i < imagemCarros.length; i++){
      colisao = collideRectCircle(xCarro[i], yCarro[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
      if(colisao){
     voltaAtorParaPosicaoInicial();
        somColisao.play();
        if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
      }
    }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,240,0))
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if(yAtor < 18){
    meusPontos += 1;
    somPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}
function podeSeMover(){
  return yAtor < 366;
}