window.onload=init;

let credit; 

const images=["java-icon.png", "jquery-icon.png", "js-icon.png", "php-icon.png", "python-icon.png", "ruby-icon.png", "coin2.png"];

const imageValue=[3,2,3,2,2,3,6];

let currentValues=[];

function init(){
    document.getElementById("spin").onclick=initSpin;
 

}

function initSpin() {
    currentValues=[];
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

}

function showMessage() {

}

function closingButton(){

}

function playAudio(){

}