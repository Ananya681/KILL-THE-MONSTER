const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies
var engine, world;
var box = []

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,500,1200,10)
for (var i = 0; i <6 ; i ++ ) {
box [i] = new Box (900,100,70,70)
}
for (var i = 6; i <12 ; i ++ ) {
    box [i] = new Box (800,100,70,70)
    }
    for (var i = 12; i <19; i ++ ) {
        box [i] = new Box (700,100,70,70)
        }

        ball = new Ball(200,400,80,100)
        rope = new SlingShot(ball.body,{x:500,y:50})

}


function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    for (var i = 0; i <6 ; i ++ ) {
        box [i].display();
        }
        for (var i = 6; i <12 ; i ++ ) {
        box [i].display();
        }
        for (var i = 12; i <19 ; i ++ ) {
        box [i].display();
        }
        ball.display();
        rope.display();

}

function    mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}