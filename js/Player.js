var moveUp=false, moveDown=false,  moveSpeed=10;
var borderLimit=40, heightLimit=screenHeight-playerHeight-borderLimit, posY;

function movePlayer() {
  if (moveUp && moveDown){
    moveUp = false;
    moveDown = false;
    return;
  }

  if (moveUp) { //<-
    posY-=moveSpeed;
    if (posY < borderLimit) {
      posY = borderLimit;
    }
    player.style.top = posY + "px";
  }
  else if (moveDown) { //->
    posY+=moveSpeed;
    if (posY > heightLimit) {
      posY = heightLimit;
    }
    player.style.top = posY + "px";
  }
}