

function setup() {
  createCanvas(500, 400);
  somTrilha.loop(0)
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  //voltaAtorParaPosicaoInicial();
}


