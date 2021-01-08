class Ground{
    constructor(x,y,w,h){
         // JSON -- java script object notation
         var options = {
            isStatic : true
            
        }

        this.body= Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);

        // w, h are available only in constructor , so assigning them as the properties using this keyword
        this.w = w;
        this.h= h;
    }

    display(){
        var pos = this.body.position;
         push();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w, this.h);
        pop();
    }
}