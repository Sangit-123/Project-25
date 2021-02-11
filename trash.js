class Trash
{
    constructor(x,y,w,h)
    {
        
        var bounceee =
        {
         isStatic:true,
         friction:1


        }
        this.trash = Bodies.rectangle (x,y,w,h,bounceee)
         
        this.w=w
        this.h=h
    }
    display()
    {
        
        push()
        translate(this.trash.position.x,this.trash.position.y)
        rotate(this.trash.angle)
        fill("red") 
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}