var screenWidth=800, screenHeight=600, playerHeight=64;
var player=null, gameOver=false, win=false, highScore;
var sideUp, sideDown;

function update(){
  if (!player){
    initGame();
  }

  if (!gameOver){
    sideUp.offsetLeft += 5 + 'px'
    sideDown.offsetLeft += 5 + 'px'
    movePlayer();
    if (win) {
      gameOver = true;
    }
  }
  else {
    //TODO endgame
  }
}

// ------------ Keyboard -------------
function checkKeyDown(e) {
  if (win)
    return;

  e = e || window.event;

  console.log(e.keyCode);
  if (e.keyCode == '38' || e.keyCode == '87') { //Up || W
    moveUp = true;
    moveDown = false;
  }
  else if (e.keyCode == '40' || e.keyCode == '83') { //Down || S
    moveDown = true;
    moveUp = false;
  }
  //movePlayer();
}

function checkKeyUp(e) {
  if (win)
    return;

  e = e || window.event;

  if (e.keyCode == '38' || e.keyCode == '87') {
    moveUp = false;
  }
  else if (e.keyCode == '40' || e.keyCode == '83') {
    moveDown = false;
  }
}

// ------------ Cookies -------------
function WriteCookie(/*cExDays*/) {
  /*var d = new Date();
  d.setTime(d.getTime() + (cExDays*24*60*60*1000));*/
  if (window.localStorage.highscore === undefined || window.localStorage.highscore < scoreNum){
    window.localStorage.highscore = scoreNum/*+'; expires='+d.toUTCString()*/;
    console.log ('Setting localStorage : Score: ' + window.localStorage.highscore);
  }
}

function ReadCookie() {
  if (window.localStorage.highscore === undefined) {
    return 0;
  } else {
    return window.localStorage.highscore;;
  }
}

// ------------ Init Game ------------
function initGame(){
  highScore = ReadCookie();
  document.documentElement.querySelector('.score').innerHTML = 'HighScore: ' + highScore;

  player = document.createElement('div');
  document.documentElement.querySelector('.background').appendChild(player);
  player.className = 'player';

  posY=screenHeight/2;
  player.style.top = posY + "px";
  player.style.left = 40 + "px";

  sideUp = document.documentElement.querySelector('.sideUp');
  sideDown = document.documentElement.querySelector('.sideDown');
}

/*
// ------------ End Game -------------
function endGame_Lost(){
  document.documentElement.querySelector('.score').innerHTML = '';
  
  createTextDiv('highScoreText', 'HightScore: ' + ReadCookie());
  createTextDiv('gameOverText', 'Se Fodeu');
  createTextDiv('finalScoreText', 'Score: ' + scoreNum);

  createTextDiv('waitNextTurn', '"Wait 6 seconds to New Game"');
  window.setTimeout(resetBtnClick, 6000);
}

function endGame_Win(){
  document.documentElement.querySelector('.score').innerHTML = '';

  createTextDiv('gameWinText', 'Level ' + difficult + ' concluído');
  createTextDiv('finalScoreText', 'Score: ' + scoreNum);

  createTextDiv('waitNextTurn', '"Wait 5 seconds to Next Level"');
  window.setTimeout(nextBtnClick, 5000);
}

function createTextDiv(className, text){
  var divText = document.createElement('div');
  document.documentElement.querySelector('.background').appendChild(divText);
  divText.className = className;
  document.documentElement.querySelector('.' + className).innerHTML = text;
}
*/

// ------------ Events -------------
document.addEventListener('keydown', checkKeyDown);
document.addEventListener('keyup', checkKeyUp);

window.setInterval (update, 1000/60);