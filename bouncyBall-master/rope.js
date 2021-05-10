class Rope{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:40,
    stiffness:1

}
this.pointB=pointB
this.rope=Constraint.create(options)
World.add(world,this.rope)

    }
    display(){
var pointA=this.rope.bodyA.position
var pointB=this.pointB
strokeWeight(4)
line(pointB.x,pointB.y,pointA.x,pointA.y)
    }
    
}