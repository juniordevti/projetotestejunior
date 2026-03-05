const hero = document.getElementById("hero");

const imagens = [
  "entrada-externa.jpeg",
  "entrada-interna.jpeg",
  "corredor.jpeg",
  "parque.jpeg",
  "refeitorio.jpeg",
];

let index = 0;

function trocarImagem() {
  hero.style.backgroundImage = `url('${imagens[index]}')`;

  index++;

  if (index === imagens.length) {
    index = 0;
  }
}

setInterval(trocarImagem, 5000);

trocarImagem();
