
var box;

function setup(){
  createCanvas(400,400)
box=createSprite(50,50,50,50);

}
function draw(){
  background("green")
  if(keyDown("left_arrow")){
  box.x=box.x-5
  
  }

  if(keyDown("right_arrow")){
    box.x=box.x+5
    
    }
    if(keyDown("DOWN_arrow")){
      box.y=box.y+5
      
      }
      if(keyDown("UP_arrow")){
        box.y=box.y-5
        
        }
drawSprites()
}