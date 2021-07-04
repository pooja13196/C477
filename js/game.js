class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {

    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 250);
    car1.addImage("car1", car1img);
    car1.scale = 0.4;
    car2 = createSprite(300, 250);
    car2.addImage("car2", car2img);
    car2.scale = 0.4;



    cars = [car1, car2];
  }

  play() {
    form.hide();

   
    Barrel();
    roadblock();

    Player.getPlayerInfo();
    //player.getCarsAtEnd();

    if (allPlayers !== undefined) {
      //background(198,135,103);
      image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 330;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = x + 230;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        // console.log(index, player.index)

        
        if (index === player.index) {
          //stroke(10);
          //fill("red");
          //ellipse(x, y, 60, 60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
          if (obs1.isTouching(car1) || obs1.isTouching(car2)) {
            health = health / 10;
            
           //carS.play();
          }
        }
     
        // mail me on kunal.karnik@whitehatjr.com i have class wid studnt at 5 ll it possible to give me befre that?pls
       

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

   

    if (player.distance > 3780) {
      gameState = 2;
      player.rank += 1;
      Rank=player.rank
     // Player.updateCarsAtEnd(player.rank);
    }

    
   
    drawSprites();
    fill("orange");
    textSize(20);
    text("Health : " + health, displayWidth, track.y);
   

   
  }
end(){
  console.log('game ended')
}

    

}
