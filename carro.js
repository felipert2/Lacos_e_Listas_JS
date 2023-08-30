//codigo do carro

let yCarro = [40, 96, 150, 210, 263, 316];
let xCarro = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarro = [4, 4.5, 8.2, 6, 7.3, 6];


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);  
 }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarro[i] -= velocidadeCarro[i];  
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  if(passouTodaATela(xCarro[i])){
    xCarro[i] = 600;
    
   }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}
