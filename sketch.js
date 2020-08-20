const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bob1,bob2,bob3,sling1;

function setup(){
	
    var canvas = createCanvas(900,700);
    engine = Engine.create();
    world = engine.world;

    

   

    ground = new Ground(500,100,300,20);

    
  


    bob1= new Bob(500,200)
    sling1 = new SlingShot(bob1.body,{x:500,y:100})

    bob2 = new Bob(460,200)
    sling2= new SlingShot(bob2.body,{x:460,y:100})
    
    bob3 = new Bob(540,200);
    sling3 = new SlingShot(bob3.body,{x:540,y:100})

    bob4= new Bob(420,200)
    sling4 = new SlingShot(bob4.body,{x:420,y:100})

    bob5 =new Bob(580,200)
    sling5= new SlingShot(bob5.body,{x:580,y:100})


    
   

}

function draw(){
    background(225);
    Engine.update(engine);
	
    ground.display() ;

    bob1.display();
  sling1.display();

  bob2.display();
  sling2.display();

  bob3.display();
  sling3.display();

  bob4.display();
  sling4.display();
 
  bob5.display();
  sling5.display();



 }

 function keyPressed(){
    if(keyCode==UP_ARROW){
        Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-20,y:-0.4});
        
         }
  }


 






