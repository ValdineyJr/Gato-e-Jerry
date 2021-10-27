var imgGato, imgRato, jardimin
var rato, gato

function preload() {
    imgGato=loadImage("images/cat1.png");
    imgRato=loadImage("image/mouse1.png")
    jardimin=loadImage("images/garden.png");
}

function setup(){
    createCanvas(600,400);
    gato=createSprite(530,350,50,50);
    gato.addImage(imgGato)
    gato.scale=0.08;
    
}

function draw() {

    background(jardimin);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
