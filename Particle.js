class Particle
{
    constructor(x,y)
    {
        this.body=Bodies.circle(x,y,10,{'frictionAir':0.001,'density': 0.7});
        World.add(world,this.body);
        this.r=random(0,255);
        this.g=random(0,255);
        this.b=random(0,255);
        
    }
    display()
    {
       
        fill(this.r,this.g,this.b);
        ellipseMode(CENTER);
        circle(this.body.position.x,this.body.position.y,20);
    }
}