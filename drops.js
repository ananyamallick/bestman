class Drops{
    constructor(x,y){
        var options = {
            isStatic: true,
            friction : 0.1,
        }
        this.rain = Bodies.circle(x,y,5,options)
    }

    update(){
        if(this,this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400) , y:random(0,400)})
        }
    }
}