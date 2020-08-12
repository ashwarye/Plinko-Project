var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles1 = [];
var plinkos1 = [];
var divisions1 = [];
var score = 0;

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions1.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos1.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos1.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos1.push(new Plinko(j, 275));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos1.push(new Plinko(j, 375));
  }
}
function draw() {
  background(255, 255, 0);
  Engine.update(engine);
  ground1.display();
  text("Score: " + score, 20, 50);
  if (frameCount % 60 === 0) {
    particles1.push(
      new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10)
    );
    score++;
  }
  for (var j = 0; j < particles1.length; j++) {
    particles1[j].display();
  }
  for (var k = 0; k < divisions1.length; k++) {
    divisions1[k].display();
  }
  for (var j = 0; j < plinkos1.length; j++) {
    plinkos1[j].display();
  }
}
