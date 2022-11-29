var boy,boyImg,boyGroup,boyCollide;
var dogpark, dogparkImg, invisibleBlock;
var stump, stumpGroup, stumpImg;




function preload(){
    boyImg = loadImage("boy1.png","boy2.PNG");
    
    dogparkImg = loadImage("dogpark.webp");
    stumpImg = loadImage("stump.png");


}

function setup() {
    createCanvas(700,500);

 
    boy = createSprite(50,180,20,50);
    boy.addAnimation("running", boyImg);
    boy.scale = 0.7;

    invisibleBlock = createSprite(200,430,920,10);
    invisibleBlock.visible = false;
    

    dogpark = createSprite(200,180,400,20);
    dogpark.addImage("dogpark",dogparkImg);
    dogpark.velocityX = -1;
    dogpark.x = dogpark.width /2;

    dogpark.depth = boy.depth;
    boy.depth = boy.depth + 1;

    stumpGroup = new Group();

    stump = createSprite(500, 400);
    stump.addImage(stumpImg);
    stump.velocityX = -3;
    stump.lifetime = 800; 
    stump.scale = 0.1;
    stump.x = Math.round(random(500,400));
    stumpGroup.add(stump);

    if (frameCount % 90 === 0){
        stump = createSprite(500, 400);
        stump.addImage(stumpImg);
        stump.velocityX = -3;
        stump.lifetime = 800; 
        stump.scale = 0.1;
        stump.lifetime = 300;
        stumpGroup.add(stump);}

}

function draw() {
    background(180);

    if(dogpark.x < 0){
       
        dogpark.x = dogpark.width/8;
        
      }



  if(keyDown("space")&& boy.y >=100) {
    boy.velocityY = -13;
    }
    
    boy.velocityY = boy.velocityY + 0.8

    boy.collide(invisibleBlock);

    if(boy.isTouching(stumpGroup)){
        boy.destroy();
    }

    drawSprites();


}



console.log();