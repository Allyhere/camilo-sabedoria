const frase = document.getElementById("frase");
const bg = document.getElementById("main");
const { random, floor } = Math;
const twitter = document.getElementById("twitter");
const clickspace = document.getElementById("click");
const { throttle } = _;

const typewriter = new Typewriter(frase, {
  loop: false,
  delay: 30,
  autoStart: true,
});

clickspace.addEventListener("click", function () {
  throtled();
});

window.addEventListener("keypress", function (ev) {
  if (ev.keyCode === 32) throtled();
});

const fetchFrase = () => {
  console.log("hey");
  fetch("./frases.json")
    .then((res) => res.json())
    .then((json) => {
      randNum = floor(random() * json.frases.length);
      randImg = floor(random() * 2) + 1;
      randPhrase = json.frases[randNum];
      twitter.href = `https://twitter.com/intent/tweet?url=http%3A%2F%2Fallyhere.github.io%2Fcamilo-sabedoria&via=lixeletto&text=${randPhrase}&hashtags=sabedoria`;
      typePhrase(randPhrase);
      bg.style.background = `rgb(6,6,6) url('./assets/${randImg}.png') no-repeat bottom right`;
      bg.style.backgroundSize = "contain";
    });
};

const throtled = throttle(fetchFrase, 6000);

function typePhrase(string) {
  typewriter
    .deleteAll()
    .pauseFor(200)
    .typeString(string)
    .pauseFor(1000)
    .start();
}

fetchFrase();
