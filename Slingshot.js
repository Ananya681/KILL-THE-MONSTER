class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.5,
            length:280,
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options); 
        World.add(world, this.sling);
    }
   

    display(){
        var pointA = this.sling.bodyA.position

       
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           strokeWeight(5)
           
            line(pointA.x,pointA.y,pointB.x,pointB.y)

            pop();
        }
    }
    
