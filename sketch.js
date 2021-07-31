const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var rope;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof = new roof (425,300,250,20);
	bob1 = new Bob (340,470,20)
	bob2 = new Bob (380,470,20)
	bob3 = new Bob (420,470,20)
	bob4 = new Bob (460,470,20)
	bob5 = new Bob (500,470,20);
	rope1= new Rope(bob1.body,roof.body,-80, 0);
	rope2= new Rope(bob2.body,roof.body,-40,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,40,0);
	rope5= new Rope(bob5.body,roof.body,80,0);
	Engine.run(engine);
  

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  


  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed () {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y:-45});
	}
}

