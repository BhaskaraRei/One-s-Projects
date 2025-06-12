
const cartas = document.querySelectorAll('.imagens_jogo');
let flippedCarta = false;
let primeiraCarta, segundaCarta ;
let travarTabuleiro = false;

function resetarTabuleiro() {
  [flippedCarta, travarTabuleiro] = [false, false];
  [primeiraCarta, segundaCarta] = [null, null];
}

function TempoflipCarta(){
  bloqueaTabuleiro = true;
  setTimeout(() => {
  primeiraCarta.classList.remove('flip');
  segundaCarta.classList.remove('flip');
   resetarTabuleiro();
  },1000);
}

function desabilitarCartas(){
    primeiraCarta.removeEventListener('click',flipCarta);
    segundaCarta.removeEventListener('click',flipCarta);
    resetarTabuleiro();
}

function VerificarCarta(){
    if(primeiraCarta.dataset.cartas === segundaCarta.dataset.cartas){
        desabilitarCartas();
    }else{
        TempoflipCarta();
    }
}

function flipCarta() {
  if (travarTabuleiro || this === primeiraCarta) return;
  this.classList.add('flip')
  if(!flippedCarta){
    flippedCarta = true
    primeiraCarta = this;
    return;
  }
  segundaCarta = this;
  flippedCarta = false
  VerificarCarta();
}

(function embaralharCartas() {
   cartas.forEach((carta) =>{
      let aleatoriaPosicao = Math.floor(Math.random() * 12);
      carta.style.order = aleatoriaPosicao;
   })
})();
 cartas.forEach((carta) => {
  carta.addEventListener('click',flipCarta)
})
