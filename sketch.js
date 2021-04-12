const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14;
var engine, world;
var bhoot1,bhoot2,bhoot3,bhoot4,bhoot5,bhoot6,bhoot7,bhoot8,bhoot9,bhoot0
function setup(){
    var canvas = createCanvas(1500,700)
    engine = Engine.create();
    world = engine.world;

  keyhunter = new KeyHunter(100 ,530 ,50 ,50)
   
    m1 = new Maze(20,20,1455,10)
    m2 = new Maze(20,20,10,670)
    m3 = new Maze(20,680,1455,10)
    m4 = new Maze(1470,20,10,670)
    
    m5 = new Maze(70,70,1300,10);

    m6 = new Maze(70,80,10,363);
    m7 = new Maze(200,220,10,80);
    m8 = new Maze(200,210,1190,10);
    m9 = new Maze(200,300,1190,10);
    m10 = new Maze(1380,300,10,331);
    m11 = new Maze(1270,430,10,80);
    m12 = new Maze(80,430,1190,10);
    m13 = new Maze(80,620,1300,10);
    m14 = new Maze(70,510,1210,10);
   // m14 = new Ma10ze();

  
  bhoot1 = new Bhoot(300,100,10,10)
  bhoot1.velocityY=2;
   bhoot2 = new Bhoot(1180,100,10,10)
 // bhoot3 = new Bhoot(200,100,10,10)
   bhoot4 = new Bhoot(1200,400,10,10)
   bhoot5 = new Bhoot(100,300,10,10)
   bhoot6 = new Bhoot(1157,600,10,10)
  bhoot7 = new Bhoot(400,600,10,10)
   bhoot8 = new Bhoot(600,100,10,10)
   bhoot9 = new Bhoot(480,350,10,10)
  bhoot0 = new Bhoot(1280,450,10,10)
   gate1 = new Gate(1340 ,100 ,50 ,100);
}



   

function draw(){
   
    background(0);
    Engine.update(engine);


   keyhunter.display();
   m1.display();
   m2.display();
   m3.display();
   m4.display();
   m5.display();
   m6.display();
   m7.display();
   m8.display();
   m9.display();
   m10.display();
   m11.display();
   m12.display();
   m13.display();
   m14.display();

   gate1.display();
   bhoot1.display();
   bhoot2.display();
  // bhoot3.display();
   bhoot4.display();
   bhoot5.display();
   bhoot6.display();
  bhoot7.display();
   bhoot8.display();
   bhoot9.display();
   bhoot0.display();

}

function keyPressed(){
  if(keyCode === UP_ARROW){
     keyhunter.velocityY = -3
 
   }
   if(keyCode === DOWN_ARROW){
    keyhunter.velocityY = 3
   }
   if(keyCod === RIGHT_ARROW){
    keyhunter.velocityX = 3
   }
   if(keyCode === LEFT_ARROW){
    keyhunter.velocityX = -3
   }
 
   }

   
   
