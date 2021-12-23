function openDragAndDrop(){

  let dragSources = document.querySelectorAll('[draggable="true"]')
    dragSources.forEach(dragSource => {
    dragSource.addEventListener('dragstart', dragStart)
    dragSource.addEventListener('dragend', dragEnd)
    });

    let dropTargets = document.querySelectorAll('[data-role="drag-drop-container"]')
    dropTargets.forEach(dropTarget => {
    dropTarget.addEventListener('drop', drop)
    dropTarget.addEventListener('dragenter', dropEnter)
    dropTarget.addEventListener('dragover', dropOver)
    dropTarget.addEventListener('dragleave', dropLeave)
    })
}

function dragStart (e) {
    e.dataTransfer.setData('text/plain', e.target.id)
    this.classList.add('dragging');
  }

function dragEnd (e) {
    this.classList.remove('dragging');
    var Source = document.getElementById(e.target.id); 
    moveToCurrentLoc(Source);
    cancelDefault(e);
  }

function dropEnter (e) {
    cancelDefault(e);
  }

function dropOver (e) {
    cancelDefault(e);
  }

function dropLeave(e) {
    this.classList.remove('draghover');
    cancelDefault(e);
  }

function drop(e) {
    cancelDefault(e);
    let id = e.dataTransfer.getData('text/plain');
    var Source = document.getElementById(id); 
    this.classList.remove('draghover');
    console.log(id,e.target.id)

    if(id == "eb_name" || id == "eb_number" && e.target.id == "start_game_area"){
        startGameStage();
        Source.style.display = "none";
        soundEfUseful("soundef_useful");

    }else if(id == "login_click" && e.target.id == "hint_button"){
      fallIdentificationCard();
      soundEfUseful("soundef_button");

    }else if(id == "identification_card" && e.target.id == "factory"){
      IdentificationToFactory();

    }else if(id == "identification_card" && e.target.id == "user_info"){
      IdentificationToUserInfo();
      soundEfUseful("soundef_print");

    }else if(id == "login_bug" && e.target.id == "neighborB" && putbug){
      PutBugToNeighborB();

    }else if(id == "night" && e.target.id == "Sky"){
      BecomeToNight();
      soundEfUseful("soundef_closelight");

    }else if(id == "home_key" && e.target.id == "home"){
      ToTheStageThree();
      soundEfUseful("soundef_useful");

    }else if(id == "login_knock" && e.target.id == "anvil_hint"){
      KnockDownAnvil();
      soundEfUseful("soundef_useful");

    }else if(id == "login_click" && e.target.id == "host"){
      ScreenBehavior();

    }else if(id == "penties" && e.target.id == "girl"){
      EasterPenties("penties");
      soundEfUseful("soundef_useful");

    }else if(id == "bar" && e.target.id == "girl"){
      EasterPenties("bar");
      soundEfUseful("soundef_useful");

    }else if(id == "login_knock" && e.target.id == "box"){
      DropItemForBox();
      soundEfUseful("soundef_boxopen");

    }else if(id == "safe_key" && e.target.id == "safe_box"){
      PutKeyOnSaftBox();
      soundEfUseful("soundef_useful");

    }else if(id == "eraser" && e.target.id == "school"){
      PutEraserOnSchool();
      soundEfUseful("soundef_useful");

    }else if(id == "flashlight" && e.target.id == "school"){
      PutFlashlightOnSchool();

    }else if(id == "donut" && e.target.id == "dog"){
      PutDountToDog();
      soundEfUseful("soundef_useful");

    }else if(id == "login_click" && e.target.id == "book"){
      ClickTheBook();
      soundEfUseful("soundef_useful");

    }else if(id == "login_knock" && e.target.id == "scissors"){
      KnockDownTheScissors();
      soundEfUseful("soundef_useful");

    }else if(id == "scissors" && e.target.id == "garbage"){
      PutScissorToGarbage();

    }else if(id == "sticker" && e.target.id == "converter"){
      PutItemToConverter("Sticker");

    }else if(id == "word_water" && e.target.id == "converter"){
      PutItemToConverter("WordWater");

    }else if(id == "word_magnifier" && e.target.id == "converter"){
      PutItemToConverter("WordMagnifier");

    }else if(id == "garbage" && e.target.id == "water"){
      PutWaterToGarbage();

    }else if(id == "garbage" && e.target.id == "fire"){
      PutWaterToFire();

    }else if(id == "magnifier" && e.target.id == "wall"){
      PutMagnifierToFire();

    }else if(id == "end_bug" && e.target.id == "wall"){
      PutBugToWall();

    }else if(id == "end_bug" && e.target.id == "zip"){
      PutBugToZip();

    }else if(id == "word_sbug1" && e.target.id == "wall"){
      document.getElementById("word_sbug1").style.display = "none"
      PutBugToWall();

    }else if(id == "word_sbug2" && e.target.id == "wall"){
      document.getElementById("word_sbug2").style.display = "none"
      PutBugToWall();

    }else if(id == "word_sbug3" && e.target.id == "wall"){
      document.getElementById("word_sbug3").style.display = "none"
      PutBugToWall();

    }else{
      gameInfo.innerHTML = "這貌似沒甚麼用"
      var soundEfUseless = document.getElementById("soundef_useless")
      soundEfUseless.play();

      goneTimer = setTimeout(function(){
        gameInfo.innerHTML = ""
      }, 1500)
    }

  }

function cancelDefault (e) {
    e.preventDefault()
    e.stopPropagation()
    return false;
  }

var w = document.getElementById("main_login");
var c = document.getElementById("main_startgame");
function moveToCurrentLoc(Source){

    if(Source.id == "eb_number" || Source.id == "eb_name"){    
      newTop = posy - w.getBoundingClientRect().top;
      newLeft = posx - w.getBoundingClientRect().left;
    }else if(Source.id == "login_there" || Source.id == "login_is" || Source.id == "login_a" || Source.id == "login_bug" || Source.id == "login_click" || Source.id == "login_knock"){
      newTop = posy - c.getBoundingClientRect().top;
      newLeft = posx - c.getBoundingClientRect().left;
      if(Source.id == "login_click" || Source.id == "login_knock"){newTop -= 200;}
    }else{
      newTop = posy;
      newLeft = posx;
    }
    
    Source.style.top = newTop + "px";
    Source.style.left = newLeft + "px";

    if(Source.getBoundingClientRect().top + document.getElementById(Source.id).clientHeight > window.innerHeight ||
        Source.getBoundingClientRect().top < 0 ||
        Source.getBoundingClientRect().left + document.getElementById(Source.id).clientWidth > window.innerWidth||
        Source.getBoundingClientRect().left < 0){
          Source.style.top = 40 + "%";
          Source.style.left = 40 + "%";
          fallDownAnimation(Source, Source.id)

    }else{
      fallDownAnimation(Source, Source.id)
    }
}

document.onmousemove = getCursorPosition;
document.ondragover = getCursorPosition;

var posx = 0;
var posy = 0;
function getCursorPosition(e)
{
    if (!e) var e = window.event;
    if (e.pageX || e.pageY)     {
        posx = e.pageX- document.documentElement.scrollLeft- document.body.scrollLeft;
        posy = e.pageY- document.documentElement.scrollTop- document.body.scrollTop;
    }
    else if (e.clientX || e.clientY){
        posx = e.clientX ;
        posy = e.clientY ;
    }

    return [posx,posy];
}

function soundEfUseful(efType){
  var soundEfUseless = document.getElementById(efType)
  soundEfUseless.play();
  soundEfUseless.volume = 0.5;
}