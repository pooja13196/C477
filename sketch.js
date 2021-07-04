var canvas,background;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
var health=100;
var speed=0;
var form,player,game;
var database;

var car1,car1img,car2,car2img;
var track;
var cars;
var Barrelgroup,roadblockgroup;

var  obs1,obs2,obs1img,obs2img,beep,pop;


function preload(){
  obs1img=loadImage("images/barrel.png");
  obs2img= loadImage("images/roadblock.png");
  car2img=loadImage("images/car2.jpg");
  car1img=loadImage("images/car1.png");
  track=loadImage("images/track.jpg");
  bgimg=loadImage("images/bg.png");
  

 //beep=loadSound("Beep.wav");
//  pop=loadSound("Pop.wav");
}


function setup() {
  
  canvas=createCanvas(displayWidth-5,displayHeight-5);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();

  Barrelgroup=createGroup();
  roadblockgroup=createGroup();
  
 


}

function draw() {
 
  background(bgimg);  

  if(playerCount===2){
    gameState=1;
    console.log(gameState)
    game.update(1);
    //update function is not called
  }

  if(gameState===1){
    
    clear();
    game.play();
    
   
  }

  if(gameState === 2){
    game.end();
    
  }
 // drawSprites();

}

function Barrel(){
  
    
  if(frameCount% 60===0 && gameState===1){
     obs1= createSprite(10,40); 
     obs1.addImage(obs1img);
     obs1.scale=0.7;
     Barrelgroup.add(obs1);
    
     obs1.x=Math.round(random(300,1100));
     obs1.y=(camera.position.y-500);



  }}
  function roadblock(){
    if(frameCount% 150===0 && gameState===1){
      obs2= createSprite(10,40); 
      obs2.addImage(obs2img);
      obs2.scale=0.7;
      roadblockgroup.add(obs2);

      obs2.x=Math.round(random(300,1100));
      obs2.y=(camera.position.y-600);
  }}