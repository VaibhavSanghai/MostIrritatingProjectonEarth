class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true, 
            restitution: 0, 
            friction: 1, 
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius; 
        this.image = loadImage("mango.png");  
        World.add(world, this.body); 
    }

    display() {
        var pos= this.body.position;
        
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER); 
        image(this.image, 0, 0, this.radius, this.radius); 
        pop(); 
    }
}