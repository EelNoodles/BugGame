var loginBtn = document.getElementById("login");
var numberEb = document.getElementById("eb_number");
var nameEb = document.getElementById("eb_name");
var mainLoginDiv = document.getElementById("main_login");
var gameInfo = document.getElementById("game_info");

loginBtn.addEventListener("click", loginInCkeck, false);

var submitNumber = "";
var submitName = "";
function loginInCkeck(){

    submitNumber = numberEb.value;
    submitName = nameEb.value;
    
    if(submitNumber !== "" && submitName !== ""){

        vaildLogin();
        document.getElementById('eb_number').setAttribute("readOnly", true)
        document.getElementById('eb_name').setAttribute("readOnly", true)

    }else{
        gameInfo.innerHTML = "請填完所有欄位"
        var soundEfUseless = document.getElementById("soundef_useless")
        soundEfUseless.play();
  
        goneTimer = setTimeout(function(){
          gameInfo.innerHTML = ""
        }, 1500)
    }

}

var MoveStep = 0;

function vaildLogin(){

    switch (MoveStep){

        case 0:
            rotateAnimation(numberEb);
            MoveStep++;
            break;

        case 1:
            document.getElementById("login").style.visibility = "hidden";
            rotateKnockAnimation(numberEb);
            MoveStep++;
            break;

    }

}

function rotateKnockAnimation(object){

    var speed = 0;
    var degrees = getCurrentRotation(object);
        upRotateInterval = setInterval(function(){
        
            speed += -0.01;
            degrees += speed;
            object.style.webkitTransform = 'rotate(' + degrees + 'deg)';
            
            if(degrees < -20){
                clearInterval(upRotateInterval)

                downRotateInterval = setInterval(function(){
        
                    speed += 0.1;
                    degrees += speed;
                    object.style.webkitTransform = 'rotate(' + degrees + 'deg)';
                    
                    if(ebCollisionDetect(object, nameEb)){
                        fallDownAnimation(nameEb, nameEb.id);
                        clearInterval(downRotateInterval)

                        showTimeout = setTimeout(function(){

                            fallDownAnimation(object, object.id);
                            showStartGame();

                        }, 1000)

                    }
        
                },10) 
            
            }

        },10)

}

function rotateAnimation(object){

    var speed = 0;
    var degrees = getCurrentRotation(object);
        rotateInterval = setInterval(function(){
        
            speed += 0.1;
            degrees += speed;
            object.style.webkitTransform = 'rotate(' + degrees + 'deg)';
            
            if(ebCollisionDetect(object, nameEb)){
                clearInterval(rotateInterval);
            }
        
        
        },10)

}

var anvilFallTimes = 0;
function fallDownAnimation(object, id){

    var speed = 0;
    var loc = object.offsetTop;
        id = setInterval(function(){
            speed += 0.2;
            loc += speed;

            var Top = object.getBoundingClientRect().top + object.clientHeight + getCurrentRotation(object)*5;
            if(Top + speed > window.innerHeight - 40){

                if(object.id == "obj_anvil_hint"){
                    Shake(); anvilFallTimes++; anvilFallDetect(anvilFallTimes);
                }
                clearInterval(id);
                soundEfUseful("soundef_put");

            }else{

                object.style.top = loc + "px";

            }

        },10)

}

function ebCollisionDetect(gotColl, Coll){

    var aRect = gotColl.getBoundingClientRect();
    var bRect = Coll.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle);
    }
    return 0;
  }

  var startArea = document.getElementById("start_game_area");
  
function showStartGame(){

    document.getElementById("mainAreaLogo").style.visibility = "hidden";
    document.getElementById("main_startgame").style.visibility = "visible";

    nameEb.setAttribute("draggable", true);
    numberEb.setAttribute("draggable", true);
    startArea.setAttribute("data-role", "drag-drop-container");
    openDragAndDrop();

}
this.startGameDropTime = 0;
function startGameStage(){

    if(startGameDropTime == 0){

        startArea.style.background = "#696969";

    }else{

        mainLoginDiv.style.display = "none";
        startArea.classList.add("start_game_button");
        startArea.addEventListener("click", intoTheSecLevel, false);

    }

    startGameDropTime++;

}

function Shake(){
    i = 20
    var Timer = setTimeout(active,15);
    soundEfUseful("soundef_damage");
    function active(){
        if(i>=0){
            i%2 == 0 ? document.body.style.backgroundPosition = "0px " + (-75+i) + "px" : document.body.style.backgroundPosition = "0px " + (-75-i) + "px";
            i--;
            Timer = setTimeout(active,15);
        }else{
            clearTimeout(Timer);
        };
    };

}

function ShakePlot(){
    i = 20
    var Timer = setTimeout(active,15);
    function active(){
        if(i>=0){
            i%2 == 0 ? document.body.style.backgroundPosition = "0px " + (-151+i) + "px" : document.body.style.backgroundPosition = "0px " + (-151-i) + "px";
            i--;
            Timer = setTimeout(active,15);
        }else{
            clearTimeout(Timer);
        };
    };

}

function ShowPlot(Stage){
    var plotBK = document.getElementById("plot");
    switch (Stage){
        case "stage2":
            plotBK.style.display = "block"
            gameInfo.innerHTML = "有一隻蟲"
            setTimeout(function(){
                gameInfo.innerHTML = "一隻電腦的壞蟲"
                setTimeout(function(){
                    gameInfo.innerHTML = "蟲的存在..."
                    setTimeout(function(){
                        gameInfo.innerHTML = "就是要找到一台電腦"
                        setTimeout(function(){
                            gameInfo.style.fontSize = "40px"
                            gameInfo.innerHTML = "摧毀掉它！！"
                            ShakePlot()
                            soundEfUseful("soundef_bomb")
                            setTimeout(function(){
                                gameInfo.style.fontSize = "25px"
                                gameInfo.style.color = "yellow"
                                gameInfo.innerHTML = "來找找一間房子進入"
                                setTimeout(function(){
                                    gameInfo.innerHTML = ""
                                    plotBK.style.display = "none"
                                    gameInfo.style.color = "white"
                                  }, 3000)
                            }, 3000)
                        }, 3000)
                    }, 2000)
                }, 1500)
            }, 2000)
            break;
        case "stage3":
            plotBK.style.display = "block"
            gameInfo.innerHTML = "讚~ 進來了"
            setTimeout(function(){
                gameInfo.innerHTML = "讓我看看如何進到這個少女..."
                setTimeout(function(){
                    gameInfo.innerHTML = "的電腦 OuO"
                    setTimeout(function(){
                        gameInfo.innerHTML = ""
                        plotBK.style.display = "none"
                    }, 3000)
                }, 3000)
            }, 3000)
            break;
        case "stage4":
                plotBK.style.display = "block"
                gameInfo.innerHTML = "來到最後一階段了"
                setTimeout(function(){
                    gameInfo.innerHTML = "我必須穿過這座牆"
                    setTimeout(function(){
                        gameInfo.innerHTML = "好讓我..."
                        setTimeout(function(){
                            gameInfo.style.fontSize = "40px"
                            gameInfo.innerHTML = "摧毀掉這台電腦！！"
                            ShakePlot()
                            soundEfUseful("soundef_bomb")
                            setTimeout(function(){
                                gameInfo.innerHTML = ""
                                plotBK.style.display = "none"
                                gameInfo.style.fontSize = "25px"
                              }, 3000)
                        }, 3000)
                    }, 3000)
                }, 3000)
                break;
    }
}