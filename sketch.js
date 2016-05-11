var NUMBER_OF_PARTICLES = 100;
var particleGroups = new Array();

function setup() {
  frameRate(60);
  createCanvas(640, 960);
  noStroke();
}

function draw() {
  background("#99cdef");
  
  for (var i = 0; i < particleGroups.length; i++) {
    var particles = particleGroups[i];
    for (var j = 0; j < NUMBER_OF_PARTICLES; j++) {
      particles[j].update();
      particles[j].display();  
    }    
  }
}

function mousePressed() {
  var particles = new Array(NUMBER_OF_PARTICLES);
  for (var i = 0; i < NUMBER_OF_PARTICLES; i++) {
    particles[i] = new Particle();
  }
  particleGroups.push(particles);
}

function Particle() {
  this.weight = random(1, 10);
  this.fillColor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 240));
  
  this.pos = createVector(mouseX, mouseY);
  this.vel = createVector(0, 0);

  this.update = function() {
    this.acc = createVector(random(-0.5, 0.5), 0.4*0.1*this.weight); // accelerate randomly to left and right, but constantly downward by an acceleration depending on the weight
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    fill(this.fillColor);
    ellipse(this.pos.x, this.pos.y, this.weight, this.weight);
  }
}