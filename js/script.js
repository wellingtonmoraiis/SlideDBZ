const slide = document.querySelector('.slides');
let imgs = [
  './img/1.png.jpeg',
  './img/2.png.jpeg',
  './img/3.png.jpeg',
  './img/4.png.jpeg',
  './img/5.png.jpeg',
  './img/6.png.jpeg',
];

let time = 2000; //intervalo de tempo para a executar o slide 2s.
let count = 0; //contador começa do 0.

function moveSlide() {
  slide.src = imgs[count];

  if (count < imgs.length - 1) {
    count++;
  } else {
    count = 0;
  }
  setTimeout('moveSlide()', time);
}

window.onload = moveSlide; //()window.onload)execulta o código quando a página estiver totalmente carregada.
