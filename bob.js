class Bob{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{density:0.4,restitution:1.2,friction:0})
        World.add(world,this.body)
        this.radius=radius
        
    }
   display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius)
   }


}