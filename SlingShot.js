class SlingShot{

    constructor(body1,point){

       
     
        var options={
            bodyA:body1,
            pointB:point,
            length:200,
            stiffness:0.2,
            
        }

        this.sling=Matter.Constraint.create(options)
        World.add(world,this.sling);
    }

    display(){
      var pointA=this.sling.bodyA.position;
      var pointB=this.sling.pointB;
        push ()
      strokeWeight(5);
      stroke("black")


      line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop ()


    }
}