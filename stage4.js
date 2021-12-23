var bkMusicStage4 = document.getElementById("bkmusic_stage4")

function ToTheStageFour(){

    ShowPlot("stage4");

    document.getElementById("stage_three").style.display = "none";
    document.body.style.background = "url('Material/re_5797247.jpg') no-repeat"
    document.body.style.backgroundPosition = "0px -151px";
    document.body.style.backgroundColor = "black"
    document.getElementById("stage_four").style.display = "block";

    let conTargets = document.querySelectorAll(".con_stage4")
    conTargets.forEach(conTarget => {
        conTarget.setAttribute("data-role", "drag-drop-container")})

    openDragAndDrop()

    bkMusicStage3.pause();
    bkMusicRaintage3.pause();

    bkMusicStage4.play();
    bkMusicStage4.volume = 0;
    var volume = 0;
    volumeInterval = setInterval(() => {
        bkMusicStage4.volume = volume;
        volume += 0.005;
        if(volume > 0.2){
            clearInterval(volumeInterval)
        }
    }, 100);

    var wordBug = document.getElementById("end_bug");
    fallDownAnimation(wordBug, wordBug.id)
    wordBug.setAttribute("draggable", true)
    openDragAndDrop();
}

function KnockDownTheScissors(){
    var objectSc = document.getElementById("scissors");

    fallDownAnimation(objectSc, objectSc.id)
    objectSc.setAttribute("draggable", true)
    openDragAndDrop();

    gameInfo.innerHTML = "把應用程式敲下來了"
    var soundEfUseless = document.getElementById("soundef_useless")
    soundEfUseless.play();

    goneTimer = setTimeout(function(){
      gameInfo.innerHTML = ""
    }, 1500)
}

var CanHaveSticker = true;
function PutScissorToGarbage(){
    if(CanHaveSticker){
        soundEfUseful("soundef_useful");
        var objectSticker = document.getElementById("sticker");
        var objectGarbage = document.getElementById("garbage");
    
        objectGarbage.style.background = "url(Material/app_recyclebin_empty.png) no-repeat"
        objectGarbage.style.backgroundSize = "contain"
        objectSticker.style.display = "block"
        fallDownAnimation(objectSticker, objectSticker.id)
        objectSticker.setAttribute("draggable", true)
        openDragAndDrop();

        CanHaveSticker = false;
        gameInfo.innerHTML = "變成一般的桶子了"
        soundEfUseful("soundef_scissors");
    
        goneTimer = setTimeout(function(){
          gameInfo.innerHTML = ""
        }, 3000)
    }else{
        soundEfUseful("soundef_useless");
        gameInfo.innerHTML = "已經沒東西可以剪了"
        goneTimer = setTimeout(function(){
            gameInfo.innerHTML = ""
          }, 3000)
    }

}

var ConverterUseful = false;
function PutItemToConverter(item){
    if(item == "Sticker"){
        var objectSticker = document.getElementById("sticker");
        var objectConverter = document.getElementById("converter");
        
        objectConverter.style.background = "url(Material/app_imgtrans_use.png) no-repeat"
        objectConverter.style.backgroundSize = "contain"
        objectSticker.style.display = "none"
        ConverterUseful = true;
        soundEfUseful("soundef_useful");
    }else if(item == "WordWater"){
        if(ConverterUseful){
            var objectWordWater = document.getElementById("word_water");
            var objectWater = document.getElementById("water");
    
            objectWordWater.style.display = "none"
            objectWater.style.display = "block"
            fallDownAnimation(objectWater, objectWater.id)
            soundEfUseful("soundef_useful");
        }else{
            soundEfUseful("soundef_useless");
            gameInfo.innerHTML = "為什麼還不能用，一定缺少了甚麼"
            goneTimer = setTimeout(function(){
                gameInfo.innerHTML = ""
              }, 3000)
        }
    }else if(item == "WordMagnifier"){
        if(ConverterUseful){
            var objectWordMagnifier = document.getElementById("word_magnifier");
            var objectMagnifier = document.getElementById("magnifier");
    
            objectWordMagnifier.style.display = "none"
            objectMagnifier.style.display = "block"
            fallDownAnimation(objectMagnifier, objectMagnifier.id)
            objectMagnifier.setAttribute("draggable", true)
            openDragAndDrop();
            soundEfUseful("soundef_useful");
        }else{
            soundEfUseful("soundef_useless");
            gameInfo.innerHTML = "為什麼還不能用，一定缺少了甚麼"
            goneTimer = setTimeout(function(){
                gameInfo.innerHTML = ""
              }, 3000)
        }
    }

}

var openStat = false;
function MusicFolderOpen(){
    var musicFolder = document.getElementById("music_folder");

    if(!openStat){    
        musicFolder.style.display = "block"
        openStat = true;
    }else{
        musicFolder.style.display = "none"
        openStat = false;
    }
}

var isWater = false;
function MusicPlay(songId){
    var loadBar = document.getElementById("loadbar")
    var loadBarWater = document.getElementById("loadbar_water")
    loadBarWater.style.width = "0%"
    loadBar.style.display = "block"
    loadBar.style.transform = "translate(-50%, -50%) rotate(0deg)";
    document.body.classList.remove("backgroundShake")
    document.getElementById("music_threenight").pause();
    document.getElementById("music_forget").pause();
    document.getElementById("music_magnifier").pause();
    bkMusicStage4.pause()
    isWater = false;
    var songPlay = document.getElementById(songId);
    songPlay.play();

    switch (songId){
        case "music_threenight":
            loadBar.style.background = "url(Material/loadbar_moon.png) no-repeat";
            loadBar.style.backgroundSize = "contain"
            document.body.classList.add("backgroundShake")
            threeNightTimeIntervl = setTimeout(() => {
                var wordMagnifier = document.getElementById("word_magnifier")
                var garbageApp = document.getElementById("garbage")
                var musicFolder = document.getElementById("music_folder")

                musicFolder.style.background = "url(Material/d4hIbB_noma.png) no-repeat"
                musicFolder.style.backgroundSize = "contain"

                wordMagnifier.style.display = "block"
                fallDownAnimation(wordMagnifier, wordMagnifier.id)
                fallDownAnimation(garbageApp, garbageApp.id)
                wordMagnifier.setAttribute("draggable", true)
                garbageApp.setAttribute("draggable", true)
                openDragAndDrop();
                gameInfo.innerHTML = "好多東西掉了下來！！"
                goneTimer = setTimeout(function(){
                    gameInfo.innerHTML = ""
                  }, 3000)
            }, 3000);
            break;
        case "music_forget":
            loadBar.style.background = "url(Material/loadbar_water.png) no-repeat";
            loadBar.style.backgroundSize = "contain"
            isWater = true;
            clearInterval(threeNightTimeIntervl)
            break;
        case "music_magnifier":
            loadBar.style.background = "url(Material/loadbar_ma.png) no-repeat";
            loadBar.style.backgroundSize = "contain"
            clearInterval(threeNightTimeIntervl)
            break;
    }
}

function StopFolderMusic(){
    var loadBar = document.getElementById("loadbar")
    loadBar.style.display = "none"
    document.getElementById("music_threenight").pause();
    document.getElementById("music_forget").pause();
    document.getElementById("music_magnifier").pause();
    document.body.classList.remove("backgroundShake")
    bkMusicStage4.play()
    try{    
        clearInterval(threeNightTimeIntervl)
    }finally{}
}

var DragloadBar = document.getElementById("loadbar");
DragloadBar.addEventListener("mousedown", loadBarDragStart)

function loadBarDragStart(e){
    startX = e.clientX - DragloadBar.offsetLeft;
    startY = e.clientY - DragloadBar.offsetTop;
    document.addEventListener('mousemove', loadBarDragMove);
    document.addEventListener('mouseup', loadBarDragStop);
}

function loadBarDragMove(e) {
    objectX = window.innerWidth/2
    ObjectY = window.innerHeight/2
    posx = e.clientX ;
    posy = e.clientY ;
    console.log(posx, posy, objectX, ObjectY)
    DragloadBar.style.transform = "translate(-50%, -50%) rotate(" + getTwoPointAngle(posx, posy, objectX, ObjectY) + "deg)";
    
    if(isWater){    
        var loadBarWater = document.getElementById("loadbar_water")
        loadBarWater.style.width = (getTwoPointAngle(posx, posy, objectX, ObjectY)-40) + "%"
        console.log(getTwoPointAngle(posx, posy, objectX, ObjectY)-40)
        if((getTwoPointAngle(posx, posy, objectX, ObjectY)-40)>45){
            var wordWater = document.getElementById("word_water")
            wordWater.style.display = "block"
            fallDownAnimation(wordWater, wordWater.id)
            wordWater.setAttribute("draggable", true)
            openDragAndDrop();
            loadBarDragStop();
        }
    }
    
}

function loadBarDragStop(e) {
    document.removeEventListener('mousemove', loadBarDragMove);
    document.removeEventListener('mouseup', loadBarDragStop)
}

function getTwoPointAngle(px1, py1, px2, py2) {
    const x = Math.abs(px1 - px2);
    const y = Math.abs(py1 - py2);

    const z = Math.sqrt(x * x + y * y);

    const angle = Math.round((Math.asin(y / z) / Math.PI) * 180);

    return angle;
}

var CanHaveWater = false;
function PutWaterToGarbage(){
    var waterObject = document.getElementById("water");
    var garbageObject = document.getElementById("garbage")

    if(!CanHaveSticker){
        waterObject.style.display = "none"
        garbageObject.style.background = "url(Material/app_recycle_full.png) no-repeat"
        garbageObject.style.backgroundSize = "contain"

        CanHaveWater = true;
        gameInfo.innerHTML = "桶子裡裝滿水了"
        goneTimer = setTimeout(function(){
            gameInfo.innerHTML = ""
          }, 3000)
    }else{
        gameInfo.innerHTML = "貼紙這樣會濕掉吧.."
        goneTimer = setTimeout(function(){
            gameInfo.innerHTML = ""
          }, 3000)
    }
}

var isFire = true;
function PutWaterToFire(){
    var garbageObject = document.getElementById("garbage")
    var fireObject = document.getElementById("fire")

    if(CanHaveWater){
        garbageObject.style.background = "url(Material/app_recyclebin_empty.png) no-repeat"
        garbageObject.style.backgroundSize = "contain"
        fireObject.style.display = "none"

        isFire = false;
        gameInfo.innerHTML = "火熄滅了.."
        goneTimer = setTimeout(function(){
            gameInfo.innerHTML = ""
          }, 3000)
    }
}

var isBigger = false;
function PutMagnifierToFire(){
    var magnifierObject = document.getElementById("magnifier")
    var wallObject = document.getElementById("wall")

    magnifierObject.style.display = "none"
    wallObject.style.background = "url(Material/wall_holeBig.png) no-repeat"
    wallObject.style.backgroundSize = "cover"
    isBigger = true;
}

var isSmall = false;
function PutBugToZip(){
    var wordBug = document.getElementById("end_bug");
    wordBug.style.display = "none"
    var smallBug = document.querySelectorAll(".s_bug")
    smallBug.forEach(Target=>{
        Target.style.display = "block"
        fallDownAnimation(Target, Target.id)
        Target.setAttribute("draggable", true)
        openDragAndDrop();
        isSmall = true;
    })
}

var intoTimes = 0
function PutBugToWall(){
    if(!isFire){
        if(isBigger){
            if(isSmall){
                soundEfUseful("soundef_useful");
                intoTimes++;
                gameInfo.innerHTML = "通過了！"
                goneTimer = setTimeout(function(){
                    gameInfo.innerHTML = ""
                  }, 3000)
                if (intoTimes == 3){
                    document.getElementById("stage_four").style.display = "none";
                    document.getElementById("login_click_area").style.display = "none";
                    document.getElementById("end_title").style.display = "block";
                    document.getElementById("end_info").style.display = "block";
                    document.getElementById("end_info").innerHTML = "蟲蟲 " + submitNumber + " " + submitName 
                    document.body.style.background = "black"
                    bkMusicStage4.pause()
                }
            }else{
                gameInfo.innerHTML = "哭阿，還是過不去..看來該做些改BANG"
                goneTimer = setTimeout(function(){
                    gameInfo.innerHTML = ""
                  }, 3000)
            }
        }else{
            gameInfo.innerHTML = "洞太小了，過不去.."
            goneTimer = setTimeout(function(){
                gameInfo.innerHTML = ""
              }, 3000)
        }
    }else{
        gameInfo.innerHTML = "太燙了，無法靠近.."
        goneTimer = setTimeout(function(){
            gameInfo.innerHTML = ""
          }, 3000)
    }
}