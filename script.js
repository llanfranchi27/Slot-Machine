// Variables

const images = [
  "imgs/1.png",
  "imgs/2.png",
  "imgs/python-icon.png",
  "imgs/ruby-icon.png",
  "imgs/coin2.png",
];

const currentImages = [];

// Element references

const spinButton = document.getElementById("spin");
const leftImage = document.getElementById("left-image");
const middleImage = document.getElementById("middle-image");
const rightImage = document.getElementById("right-image");
const messageId = document.getElementById("show-result");

//Event listeners

spinButton.addEventListener("click", spin);

// Functions

function getRandomImg() {
  let randomIdx = Math.floor(Math.random() * images.length);
  return images[randomIdx];
}

function spin() {

  leftImage.src = getRandomImg();
  middleImage.src = getRandomImg();
  rightImage.src = getRandomImg();
  compareImage();
}

function compareImage() {
  messageId.textContent = "";
  if (leftImage.src === middleImage.src && middleImage.src === rightImage.src){
      messageId.textContent = "You have won!";
  } else {
    messageId.textContent = "You have lost!";
  }

}


