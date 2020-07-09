class Bin {
    constructor(x, y,  height,angle) {
      var options = {
         
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width =20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  