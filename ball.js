
class Ball {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':1.0,
          'friction':0,
          'density':0.8
      }
      this.radius = r;
      this.body = Bodies.circle(x, y, this.radius, options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      
       ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

      
    }
  };
  