var userInfo = document.getElementById("user_info");
var bkMusicStage2 = document.getElementById("bkmusic_stage2")
var bkMusicStreetStage2 = document.getElementById("bkmusic_stage2_street")

function intoTheSecLevel(){

    ShowPlot("stage2");

    startArea.style.display = "none";
    bkMusicStage2.play();
    bkMusicStreetStage2.play();
    bkMusicStage2.volume = 0;
    bkMusicStreetStage2.volume = 0;
    var volume = 0;
    volumeInterval = setInterval(() => {
        bkMusicStage2.volume = volume;
        bkMusicStreetStage2.volume = volume;
        volume += 0.005;
        if(volume > 0.2){
            clearInterval(volumeInterval)
        }
    }, 100);

    document.body.classList.add("backgroundToStage2")
    setTimeout(() => {
        document.body.classList.remove("backgroundToStage2")
        document.body.style.background = "url('Material/re_2249567at.gif') no-repeat"
        document.body.style.backgroundColor = "black"
        document.body.style.backgroundPosition = "0px -151px";
        
        let fallTargets = document.querySelectorAll(".stage2")
        fallTargets.forEach(fallTarget => {
            fallTarget.setAttribute("draggable", true)
            fallDownAnimation(fallTarget, fallTarget.id);})

        let conTargets = document.querySelectorAll(".con_stage2")
        conTargets.forEach(conTarget => {
            conTarget.setAttribute("data-role", "drag-drop-container")})
        document.getElementById("BUG").style.display = "none"
        document.getElementById("stage_two").style.display = "block";
        userInfo.innerHTML = "姓名：" + submitName + "<br>學號：" + submitNumber;
        openDragAndDrop();
    }, 5000);

}

var identificationCard = document.getElementById("identification_card");
var hintButton = document.getElementById("hint_button");
function fallIdentificationCard(){
    identificationCard.style.display = "block";
    identificationCard.setAttribute("draggable", true)
    openDragAndDrop()
    fallDownAnimation(identificationCard, identificationCard.id)
    hintButton.style.background = "url(Material/buttonAfter.png) no-repeat";
    hintButton.style.backgroundSize = "contain";

    gameInfo.innerHTML = "怎麼會掉出了一張識別證？"
    goneTimer = setTimeout(function(){
      gameInfo.innerHTML = ""
      hintButton.style.background = "url(Material/button.png) no-repeat";
      hintButton.style.backgroundSize = "contain";
    }, 1500)

}

var userInfoInCard = document.getElementById("user_info_in_card");
var homeKey = document.getElementById("home_key");
var dialogboxA = document.getElementById("dialogboxA");
var dialogboxB = document.getElementById("dialogboxB");
var dialogboxC = document.getElementById("dialogboxC");
var putbug = false;
var night = false;
function IdentificationToFactory(){
    if(userInfoInCard.innerHTML == ""){
        dialogboxA.innerHTML = "錯誤! 識別證無詳細資料！";
        soundEfUseful("soundef_useless");
        goneTimer = setTimeout(function(){
            dialogboxA.innerHTML = ""
          }, 2000)
    }else{
        if(!night){
            soundEfUseful("soundef_useless");
            dialogboxA.innerHTML = "*現在為管制時間*<br><strong>夜間</strong>為一般人開放時段！";
            goneTimer = setTimeout(function(){
                dialogboxA.innerHTML = ""
            }, 2000)
        }else{
            soundEfUseful("soundef_irondoor");
            gameInfo.innerHTML = "成功拿到家的鑰匙了"
            goneTimer = setTimeout(function(){
              gameInfo.innerHTML = ""
            }, 2000)

            identificationCard.style.display = "none";
            homeKey.style.display = "block";
            fallDownAnimation(homeKey, homeKey.id)
            homeKey.setAttribute("draggable", true)
            openDragAndDrop();

        }
    }

}

function IdentificationToUserInfo(){

    userInfoInCard.innerHTML = "姓名：" + submitName + "<br>學號：" + submitNumber;
    putbug = true;

    gameInfo.innerHTML = "識別證上好像印上了玩家識別資訊"
    goneTimer = setTimeout(function(){
      gameInfo.innerHTML = ""
    }, 2000)

    var NeighborAMes = ["我們的社區好安靜", "最近社區害蟲好多", "隔壁是不是家暴，好大聲！", "最近都會有奇怪的蟲進大樓<br>聽隔壁的鄰居好像很怕蟲的樣子"]
    showMessageFormNeighborA = setInterval(() => {
        dialogboxB.innerHTML = NeighborAMes[Math.floor(Math.random() * 4)]
        goneTimer = setTimeout(function(){
            dialogboxB.innerHTML = ""
        }, 5000)

    }, 8000);

}

var wordNight = document.getElementById("night");
var textBug = document.getElementById("login_bug");
putBugTimes = 0;
function PutBugToNeighborB(){

    var NeighborBMes = ["阿！", "阿！阿！", "乾！ 怎麼一堆蟲！", "為什麼只要接近&emsp;間時段<br>就會有蟲出來阿！"]
    if(putBugTimes != 2){
        textBug.style.visibility = "hidden"
        dialogboxC.innerHTML = NeighborBMes[Math.floor(Math.random() * 3)]
        goneTimer = setTimeout(function(){
            dialogboxC.innerHTML = ""
            textBug.style.visibility = "visible"
        }, 2000)
    putBugTimes++;
    soundEfUseful("soundef_scream");

    }else{
        textBug.style.visibility = "hidden"
        dialogboxC.innerHTML = NeighborBMes[3]
        wordNight.style.display = "block";
        wordNight.classList.add("night_move")
        goneTimer = setTimeout(function(){
            wordNight.style.display = "none";
            textBug.style.visibility = "visible"
            dialogboxC.innerHTML = ""
            wordNight.classList.remove("night_move")
        }, 6000)

        wordNight.addEventListener("click", NightUp);
        var soundEfJump = document.getElementById("soundef_jump")
        soundEfJump.play();
        soundEfJump.volume = 0.5;

    }

}

function NightUp(){
    clearTimeout(goneTimer)
    wordNight.classList.remove("night_move")
    wordNight.style.display = "block";
    dialogboxC.innerHTML = ""
    wordNight.style.top = wordNight.getBoundingClientRect().top - 20 + "px";
    fallDownAnimation(wordNight, wordNight.id)
    wordNight.setAttribute("draggable", true)
    openDragAndDrop();
}

function BecomeToNight(){
    gameInfo.innerHTML = ""
    document.body.style.background = "url('Material/re_2249567n.png') no-repeat"
    document.body.style.backgroundPosition = "0px -151px";
    wordNight.style.display = "none";
    clearInterval(showMessageFormNeighborA);
    clearInterval(night);
    dialogboxB.innerHTML = ""
    night = true;
}
