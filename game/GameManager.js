function update(){
  if (!gameOver){
    movePlayer();
    if (lifes < 0 || win) {
      gameOver = true;
    }
  }
  else {
    //TODO endgame
  }
}

// ------------ Keyboard -------------
function keyPress(evt) {
  if (lifes < 0)
    return;

  var charCode = evt.keyCode || evt.which;

  console.log(charCode);
};

function checkKeyDown(e) {
  if (lifes < 0 || win)
    return;

  e = e || window.event;

  console.log(e.keyCode);
  // if (e.keyCode == '38') {
  // }
  // else if (e.keyCode == '40') {
  // }
  //movePlayer();
}

function checkKeyUp(e) {
  if (lifes < 0)
    return;

  e = e || window.event;

  // if (e.keyCode == '38') {
  // }
  // else if (e.keyCode == '40') {
  // }
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
document.addEventListener('keypress', keyPress);
document.addEventListener('keydown', checkKeyDown);
document.addEventListener('keyup', checkKeyUp);

window.setInterval (update, 1000/60);