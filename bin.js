class Bin{
    constructor(x,y,width,height){
        var options = {
          'density':10,
          'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/dustbingreen.png");
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.body.visible = false
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0);
      rect(0, 0, this.width, this.height);
      image (this.image,1000,490,240,120);      
      //imageMode(CENTER);
      //image(this.image,0,0,this.width,this.height)
      pop();
    }
}

/*class Bin extends Baseclass{
  constructor(x,y,width,height){
    super(x,y,width,height);
    this.image = loadImage("Images/dustbingreen.png");
  }
  
}*/