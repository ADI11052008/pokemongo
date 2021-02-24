
var gameState="Choose",T=0,B=0
var img
var pokemon
var life=100
function preload() {

  balbasaurImage= loadImage("balbasaur.png")
  charmanderImage= loadImage("charmander.png")
  PikachuImage= loadImage("pikachu.png")
  SquirtleImage= loadImage("squirtle.png")
  AshImage =loadImage("Ash poke trainer.jpg")
  Trainer1Image =loadImage("trainer 1.png")
  Trainer2Image =loadImage("trainer 2.png")
  pokeballImage =loadImage("pokeball.png")
  gardenImage= loadImage("garden.jpg")
  factoryImage= loadImage("factory.jpg")
  cityImage= loadImage("city.jpg")
} 


function setup() {
  createCanvas(displayWidth,displayHeight);

trainer1= createSprite(500,300)
trainer1.scale=0.5
trainer1.addImage(Trainer1Image)
trainer2= createSprite(100,300)
trainer2.addImage(Trainer2Image)


background1= createSprite(175,600)  
background1.scale=1.2
background1.addImage(gardenImage)
background2= createSprite(500,600)
background2.scale=0.2 
background2.addImage(cityImage)
background3= createSprite(900,600) 
background3.scale=0.3
background3.addImage(factoryImage)

pokemon= createSprite(1000,550)
pokemon.debug=2

trainer= createSprite(200,500)
backgroundImage= createSprite(400,400)
pokemon.visible=false
trainer.visible=false
backgroundImage.visible=false
/*
pikachu= createSprite(800,250)
pikachu.scale=0.09
pikachu.addImage(PikachuImage)

balbasaur= createSprite(950,275)
balbasaur.scale=0.12
balbasaur.addImage(balbasaurImage)

Charmander= createSprite(800,400)
Charmander.scale=0.55
Charmander.addImage(charmanderImage)

Squirtle= createSprite(950,415)
Squirtle.scale=0.50
Squirtle.addImage(SquirtleImage)

pokeball= createSprite(600,325)
pokeball.scale=0.06
pokeball.addImage(pokeballImage)
*/
}

function draw() {
  background(255,255,255); 


   
  if(gameState==="Choose"){
  if(mousePressedOver(trainer1)){
    console.log("Trainer1 selected")
    T=1
  }
  else if(mousePressedOver(trainer2)){
    console.log("Trainer2 selected")
    T=2
  }

  
  if(mousePressedOver(background1)){
   
    B=1
  }
  else if (mousePressedOver(background2)){
    
    B=2
  }
  else if (mousePressedOver(background3)){
    
    B=3
  }

  if((T===1||T===2)&&(B===1||B===2||B===3)){
     gameState="Start"
  }
}



  else if(gameState==="Start"){
    
    if(B===1)
    {
      img=gardenImage
      
    }
    else if(B===2)
    {
      img=cityImage
     
    }
    else{
      img=factoryImage
     
    }

    background(img)
    textSize(30)
    fill("Red")
    text("Life:"+life,displayWidth-250,50)
    trainer1.destroy()
    trainer2.destroy()
    background1.destroy()
    background2.destroy()
    background3.destroy()
    if(T===1){
      trainer.visible=true
    trainer.addImage(Trainer1Image)
  }

  else{
    trainer.visible=true
    trainer.addImage(Trainer2Image)
  }
  if(B===1)
    {
      pokemon.visible=true 
      pokemon.addImage(balbasaurImage)
      pokemon.scale=0.3
    }
    else if(B===2)
    {
      pokemon.visible=true 
      pokemon.addImage(SquirtleImage)
      pokemon.setCollider("rectangle",0,0,pokemon.width+90,pokemon.height+90)
    }
    else{
      pokemon.visible=true 
      pokemon.addImage(PikachuImage)
      pokemon.setCollider("rectangle",0,0,600,pokemon.height+350)
      pokemon.scale=0.5
    }
    if(keyDown("space")){

      pokeball()
    }
  }
  drawSprites();
}
function pokeball() {
  ball=createSprite(280,520)
  ball.addImage(pokeballImage)
  ball.scale=0.04
  ball.velocityX=10
  
}
