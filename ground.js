class Ground
{
    constructor()
    {
        
        var features = {
            isStatic : true
          
          }
          this.ground = Bodies.rectangle (400,690,800,5,features)
          World.add(world,this.ground)   

    }
    display()
    {
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,800,5)
    }
}