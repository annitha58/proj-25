class Paper {
    constructor(x,y){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        } 
        this.x = x;
        this.y = y;
        this.radius = 70;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options)
        World.add(world,this.body);
    }
  
    display() {
    var paperPos = this.body.position;

        push();
        translate(paperPos.x, paperPos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius);
        pop();
    }
  }