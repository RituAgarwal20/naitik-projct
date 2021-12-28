var boy,bgimg,boyimg,track,trackImg

function preload(){
bgimg=loadImage("train.jpg")
trackImg=loadAnimation("trackbg.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight);
bg=createSprite(windowWidth/2, windowHeight);
bg.scale=2
track=createSprite(windowWidth/2, windowHeight);
track.addAnimation("runner",trackImg)
//track.velocityY=1
/*if(track.y>400){
    track.y=track.height/2
    }*/
boy=createSprite(500,500,50,50);

}

function draw() {
 background (0)
bg.addImage("track",bgimg)
track.velocityY=1
if(track.y>300){
track.y=track.height/8
}
edges= createEdgeSprites();
  boy.collide(edges);
if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-3
}
if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+3
}
 drawSprites()


 
}