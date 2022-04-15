class Snow
{
     constructor()
     {
         var options=
         {
             isStatic:true
         }
         this.body=Bodies.circle(200,400,50,50,options);
         this.image=loadImage("snow1.jpg","snow2.jpg","snow3.jpg","snow4.jpg","snow5.webp");
         World.add(world.snow);
     }
     display()
     {
         var pos=this.body.position;
         ellipseMode(RADIUS);
         ellipse(snow.position.x,snow.position.x,20,20);
     }
}