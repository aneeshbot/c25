class BaseClass{
    constructor(x,y,w,h){
        // create reactangular body

        var options = {
            'density':1.5,
            'friction': 1.0,
            'restitution':0.5
        };
        
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
        this.image = loadImage("sprites/base.png");

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}