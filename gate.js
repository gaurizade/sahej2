class Gate{
    constructor(x, y, width, height) {
      
        this.y = y
        this.x = x
        this.width = width;
        this.height = height;
      
       
      }
    
      display(){
       
        rect( this.x,this.y, this.width, this.height);
        
      }
};