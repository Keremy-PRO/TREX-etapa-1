var trex;
var running;//paso 1 - Creo la variable
var piso, pisoImagen;

function preload(){//precarga, animaciones, sonidos e imagenes
  running = loadAnimation("trex1.png", "trex3.png","trex4.png");//paso 2 cargo la animación
  pisoImagen = loadImage("ground2.png");
}

function setup(){// configuración del juego
  createCanvas(600,200);
  trex = createSprite(50,160,10,30);
  trex.addAnimation("corriendo",running);// paso 3 pego la animación al sprite
  trex.scale=0.5;

  piso=createSprite(300,180,600,10);
  piso.shapeColor="brown";
  piso.addImage(pisoImagen);
}

function draw(){//Dibujar
  background("gray");
  drawSprites();

  if(keyDown("space")){
    trex.velocityY= -10;
  }

  trex.velocityY =  trex.velocityY  + 0.8; // Gravedad, jala al trex hacia el piso
  trex.collide(piso);// el trex choca contra el piso
}
