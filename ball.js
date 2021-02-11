class Ball
{
    constructor(x,y,r)
    {
        
        var bounceee =
        {
         isStatic:true,
         friction:1


        }
        this.ball = Bodies.circle (x,y,r,bounceee)
        World.add(world,this.ball)   
        this.r=r
        this.Image=loadImage("paper.png")

    }
    display()
    {
        
        push()
        translate(this.ball.position.x,this.ball.position.y)
        rotate(this.ball.angle)
        fill("red") 
        imageMode(CENTER)
        image(this.Image,0,0,50,50)
        pop()
    }
}