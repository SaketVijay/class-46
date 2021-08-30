var bImg, bcg
var bird, birdImg
var button, buttonImg;
var pipeImg;
var pipesRImg;
var birdMoving;
function preload(){
    bImg = loadImage("flappyBirdBackground.png");
    birdImg = loadImage("flappy bird.png")
    pipeImg = loadImage("flappy bird pipe.png")
    pipesRImg = loadImage("flappy bird pipe rotated.png");
    birdMoving = loadImage("flappy bird moving.png")

}
function setup(){
    createCanvas(1100, 750);
    bcg = createSprite(575, 400);
    bcg.addImage(bImg);
    bcg.scale = 0.8

    bird = createSprite(250, 300, 20, 20);
    bird.addImage(birdImg);
    bird.scale = 0.1;
    bird.velocityX = 0;

    //button = createSprite(750, 700, 60, 20);

    
}

function draw(){
    background('black');
    
    bird.y = bird.y + 5;
    bcg.velocityX = -3;
    if(bcg.x < 0){
        bcg.x = 600;
    }
    obstruction();
    drawSprites();
}
function obstruction(){
    if(frameCount % 150 === 0){
        var pipes = createSprite(1150, 700, 50, 50);
        pipes.addImage(pipeImg);
        pipes.scale = 0.2;
        pipes.velocityX = -4;
        var pipesR = createSprite(1150, 50, 50, random(70, 200))
        pipesR.velocityX = -4;
        pipesR.addImage(pipesRImg);
        pipesR.scale = 0.2;
        pipes.height = Math.round(random(70, 100));
    }
}
function mouseClicked(){
    bird.y = bird.y - 50;
    bird.addImage(birdMoving);
    
}