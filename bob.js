  class Bob {
  constructor(x, y) {

    var options={
      'density':0.6,
    }

   
  
    this.body = Bodies.circle(x, y, 20,options);
    this.radius = 20;


  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push ();
    fill("red");
    circle(pos.x, pos.y , this.radius*2);
    pop();
  }
};


