var cat,cati1,cati2,cati3;
var mouse,mousei1,mousei2,mousei3;
var garden;

function preload() {
    
    cati1 = loadAnimation("images/cat1.png");
    cati2 = loadAnimation("images/cat2.png","images/cat3.png");
    cati3 = loadAnimation("images/cat4.png");

    mousei1 = loadAnimation("images/mouse1.png");
    mousei2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mousei3 = loadAnimation("images/mouse4.png");

    garden = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1400,800);
    
    //create tom and jerry sprites here
    cat = createSprite(1070,600);
    cat.addAnimation("catsitting",cati1);
    cat.scale = 0.2;

    mouse = createSprite(300,600);
    mouse.addAnimation("mouseidle",mousei1);
    mouse.scale = 0.15;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catend",cati3);
        cat.changeAnimation("catend");
        cat.scale = 0.2;
        cat.x = 400;

        mouse.addAnimation("mouseend",mousei3);
        mouse.changeAnimation("mouseend");
        mouse.scale = 0.15;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catrunning",cati2);
      cat.changeAnimation("catrunning");
      
      mouse.addAnimation("mousemoving",mousei2);
      mouse.changeAnimation("mousemoving");   
      
  }


}
