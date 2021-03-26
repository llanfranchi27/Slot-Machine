window.onload=init;

<<<<<<< Updated upstream
let credit; 
=======
const images = [
  "imgs/1.png",
  "imgs/2.png",
  "imgs/python-icon.png",
  "imgs/ruby-icon.png",
  "imgs/coin2.png",
];

const currentImages = [];
>>>>>>> Stashed changes

const images=["java-icon.png", "jquery-icon.png", "js-icon.png", "php-icon.png", "python-icon.png", "ruby-icon.png", "coin2.png"];

const imageValue=[3,2,3,2,2,3,6];

let currentValues=[];

function init(){
    document.getElementById("spin").onclick=initSpin;
 

}

function initSpin() {
for (let i=0; i<3; i++){
    currentValues.push(chooseNums());

}
alert(currentValues);
} 





function singleImageButton() {
let random=Math.floor(Math.random()*images.length);
return random;
}

function chooseNums() {
 

}


function showImage() {
    

}

function compareImages() {
  
}

function newCredits() {

<<<<<<< Updated upstream
=======
function getRandomImg() {
  let randomIdx = Math.floor(Math.random() * images.length);
  return images[randomIdx];
>>>>>>> Stashed changes
}

function showMessage() {

}

<<<<<<< Updated upstream
function closingButton(){
=======
function compareImage() {
  messageId.textContent = "";
  if (leftImage.src === middleImage.src && middleImage.src === rightImage.src){
      messageId.textContent = "You have won!";
  } else {
    messageId.textContent = "You have lost!";
  }
>>>>>>> Stashed changes

}

function playAudio(){

}