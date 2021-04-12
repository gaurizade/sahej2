class KeyHunter{
    constructor(x, y, width, height) {

      var options={
        isStatic :true
      }
      
        this.y = y
        this.x = x
        this.width = width;
        this.height = height;
     
      this.body=Bodies.rectangle(x,y,width,height,options)
      World.add(world, this.body);
      }
    
      display(){

        //rectMode(CENTER)
        rect( this.body.position.x,this.body.position.y, this.width, this.height);
        
      }

     
};