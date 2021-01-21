class Drops{
 
 
    constructor(x,y,radius)
    
     {
     
      var options = {
          
        'restitution':0.8,
        'friction':0.1,
        'density':0.11,
        }
       this.rain=[];
        this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
  
      World.add(world, this.body);
      }
    display(){
       ellipseMode(RADIUS);
       fill("blue");
      ellipse(this.body.position.x,this.body.position.y,this.radius);
     for(var i=0;i<this.rain.length;i++)
    {

this.rain.push(new Drops(random(0,400),random(0,400)))
 }  

    }
}