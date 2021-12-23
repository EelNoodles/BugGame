var bkMusicStage3 = document.getElementById("bkmusic_stage3")
var bkMusicRaintage3 = document.getElementById("bkmusic_stage3_rain")

function ToTheStageThree(){

    ShowPlot("stage3");

    document.getElementById("stage_two").style.display = "none";
    document.getElementById("stage_two_logo").style.display = "none";
    document.body.style.background = "url('Material/re_3467349n.gif') no-repeat"
    document.body.style.backgroundColor = "black"
    document.body.style.backgroundPosition = "0px -75px";
    document.getElementById("stage_three").style.display = "block";

    let conTargets = document.querySelectorAll(".con_stage3")
    conTargets.forEach(conTarget => {
        conTarget.setAttribute("data-role", "drag-drop-container")})

    openDragAndDrop()
    DogTalk()

    bkMusicStage2.pause();
    bkMusicStreetStage2.pause();

    bkMusicStage3.play();
    bkMusicRaintage3.play();
    bkMusicStage3.volume = 0;
    bkMusicRaintage3.volume = 0;
    var volume = 0;
    volumeInterval = setInterval(() => {
        bkMusicStage3.volume = volume;
        bkMusicRaintage3.volume = volume;
        volume += 0.005;
        if(volume > 0.2){
            clearInterval(volumeInterval)
        }
    }, 100);
}

function KnockDownAnvil(){

    document.getElementById("anvil_hint").style.display = "none";
    var bojAnvilHint = document.getElementById("obj_anvil_hint");
    var jiugongge = document.getElementById("jiugongge_one");
    bojAnvilHint.style.display = "block";
    jiugongge.style.display = "block";
    fallDownAnimation(bojAnvilHint, "obj_anvil_hint")
    fallDownAnimation(jiugongge, "jiugongge")
    bojAnvilHint.setAttribute("draggable", true)
    jiugongge.setAttribute("draggable", true)
    openDragAndDrop();

}

var isMuralFall = false;
function anvilFallDetect(t){
    var object = document.getElementById("mural");
    object.style.transform = 'rotate(' + 10*1.5**t + 'deg)';

    if(t==3){
        fallDownAnimation(object, object.id)
        isMuralFall = true;
        setTimeout(() => {
            object.style.display = "none";
        }, 300);
    }

    if(t==6){
        var dialogGT = document.getElementById("dialogGT");
        dialogGT.innerHTML = "好像有點鬆鬆的..."
        setTimeout(() => {
            dialogGT.innerHTML = ""
        }, 2000);
    }

    if(t==8){
        var egg = document.getElementById("penties");
        var dialogGT = document.getElementById("dialogGT");
        egg.style.display = "block"
        fallDownAnimation(egg, egg.id)
        egg.setAttribute("draggable", true)
        openDragAndDrop();
        dialogGT.innerHTML = "嗯~ <3"
        setTimeout(() => {
            dialogGT.innerHTML = ""
        }, 2000);
    }
    
    if(t==10){
        var egg = document.getElementById("bar");
        var dialogGT = document.getElementById("dialogGT");
        egg.style.display = "block"
        fallDownAnimation(egg, egg.id)
        egg.setAttribute("draggable", true)
        openDragAndDrop();
        dialogGT.innerHTML = "又掉了呢.. <3"
        setTimeout(() => {
            dialogGT.innerHTML = ""
        }, 2000);
    }
}

function EasterPenties(e){
    var egg = document.getElementById(e);
    var dialogGT = document.getElementById("dialogGT");
    egg.style.display = "none"
    dialogGT.innerHTML = "死相拉~謝謝 <3"
    setTimeout(() => {
        dialogGT.innerHTML = ""
    }, 2000);

}

var computerScreen = document.getElementById("screen");
var textTypePassword = document.getElementById("text_password");
var screenCloseButton = document.getElementById("screen_close_button");
var screenPassword = document.getElementById("screen_password");
var screenSubmit = document.getElementById("screen_submit");
function ScreenBehavior(){
    soundEfUseful("soundef_flopen");
    textTypePassword.style.display = "none"
    screenCloseButton.style.display = "none"
    screenPassword.style.display = "none"
    screenSubmit.style.display = "none"
    computerScreen.style.display = "block"
    computerScreen.classList.add("screentransform_show");
    setTimeout(() => {
        textTypePassword.style.display = "block"
        screenCloseButton.style.display = "block"
        screenPassword.style.display = "block"
        screenSubmit.style.display = "block"
        screenCloseButton.addEventListener("click", ScreenClose)
        computerScreen.setAttribute("style", "top: 18%; left: 45.7%; width: 30%; height: 35%;");
        computerScreen.classList.remove("screentransform_show");
    }, 2500);
}

function ScreenClose(){
    soundEfUseful("soundef_flclose");
    screenCloseButton.removeEventListener("click", ScreenClose)
    textTypePassword.style.display = "none"
    screenCloseButton.style.display = "none"
    screenPassword.style.display = "none"
    screenSubmit.style.display = "none"
    computerScreen.classList.add("screentransform_close");
    setTimeout(() => {
        computerScreen.style.display = "none"
        computerScreen.classList.remove("screentransform_close");
    }, 2000);

}

function DropItemForBox(){
    var itemArray = ["donut", "eraser", "safe_key", "flashlight"]
    itemArray.forEach(dropObject => {
        var sourceObject = document.getElementById(dropObject)
        sourceObject.style.display = "block"
        sourceObject.classList.add("itemBoom_"+sourceObject.id);
        setTimeout(() => {
            sourceObject.style.top = sourceObject.getBoundingClientRect().top + "px";
            sourceObject.style.left = sourceObject.getBoundingClientRect().left + "px";
            sourceObject.classList.remove("itemBoom_"+sourceObject.id);
            fallDownAnimation(sourceObject)
            sourceObject.setAttribute("draggable", true)
            openDragAndDrop();
        }, 1000);
    })
}

function PutKeyOnSaftBox(){
    if(isMuralFall){
        document.getElementById("safe_box").style.background = "url(Material/rw9-2.png) no-repeat";
        document.getElementById("safe_box").style.backgroundSize = "contain"
        document.getElementById("safe_key").style.display = "none"

        gameInfo.innerHTML = "成功打開了保險箱"

        goneTimer = setTimeout(function(){
          gameInfo.innerHTML = ""
        }, 1500)

    }

}

var isWordEraser = false;
function PutEraserOnSchool(){

    document.getElementById("school").innerHTML = "";
    isWordEraser = true;

    gameInfo.innerHTML = "擦掉了上方的字"

    goneTimer = setTimeout(function(){
      gameInfo.innerHTML = ""
    }, 1500)
}

var fhPasswordScreen = document.getElementById("fh_password");
var flashlightLighted = document.getElementById("flashlight_light")
var flashlight = document.getElementById("flashlight")
var schoolHalo = document.getElementById("school_halo");
function PutFlashlightOnSchool(){
    if(isWordEraser){
        soundEfUseful("soundef_flopen");
        fhPasswordScreen.style.display = "block"
        flashlightLighted.style.display = "block"
        schoolHalo.style.display = "block"
        flashlight.style.visibility = "hidden"
        fhPasswordScreen.classList.add("fhPassword_Show");
        setTimeout(() => {
            fhPasswordScreen.setAttribute("style", "top: 5%; left: 50%; width: 30%; height: 20%; background: #ffffff80;");
            fhPasswordScreen.innerHTML = "Ⅰ.15368947&emsp;Ⅱ.157348<br>Ⅲ.1826345&emsp;&nbsp;Ⅳ.4671539"
            flashlightLighted.addEventListener("click", CloseFhScreen)
            fhPasswordScreen.classList.remove("fhPassword_Show");
        }, 2000);
    }else{
        soundEfUseful("soundef_useless");
    }

}

function CloseFhScreen(){
    soundEfUseful("soundef_flclose");
    fhPasswordScreen.innerHTML = ""
    flashlightLighted.style.display = "none"
    flashlight.style.visibility = "visible"
    schoolHalo.style.display = "none"
    flashlight.style.top = "53%"
    flashlight.style.left = "30%"
    fallDownAnimation(flashlight, flashlight.id);
    fhPasswordScreen.classList.add("fhPassword_Close");
    setTimeout(() => {
        fhPasswordScreen.style.display = "none"
        flashlightLighted.removeEventListener("click", CloseFhScreen)
        fhPasswordScreen.classList.remove("fhPassword_Close");
    }, 2000);

}

var dialogDOG = document.getElementById("dialogDOG");
function DogTalk(){
    var DogMes = ["主人很喜歡把東西東進床邊的箱子...汪汪", "汪汪~", "好餓喔...汪汪！", "汪汪汪汪汪...都沒人要陪我玩", "主人平常喜歡看書...汪汪"]
    showMessageFormFog = setInterval(() => {
        dialogDOG.innerHTML = DogMes[Math.floor(Math.random() * 5)]
        goneTimer = setTimeout(function(){
            dialogDOG.innerHTML = ""
        }, 6000)

    }, 8000);
}

function PutDountToDog(){
    clearInterval(showMessageFormFog)
    dialogDOG.innerHTML = "好好吃喔..汪汪<br>謝謝~ 這個給你<3"
    goneTimer = setTimeout(function(){
        dialogDOG.innerHTML = ""
    }, 6000)

    var jiugongge = document.getElementById("jiugongge_three");
    document.getElementById("donut").style.visibility = "hidden";
    jiugongge.style.display = "block";
    fallDownAnimation(jiugongge, "jiugongge")
    jiugongge.setAttribute("draggable", true)
    openDragAndDrop();

}

var isBookClicked = false;
var bookHintScreen = document.getElementById("book_hint");
function ClickTheBook(){
    var jiugongge = document.getElementById("jiugongge_four");
    jiugongge.style.display = "block";
    fallDownAnimation(jiugongge, "jiugongge")
    jiugongge.setAttribute("draggable", true)
    openDragAndDrop();
    if(!isBookClicked){
        bookHintScreen.style.display = "block"
        bookHintScreen.classList.add("bookHint_Open");
        setTimeout(() => {
            bookHintScreen.setAttribute("style", "top: 60%; left: 12%; width: 28%; height: 35%;");
            bookHintScreen.classList.remove("bookHint_Open");
            isBookClicked = true;
            bookHintScreen.addEventListener("click", ()=>{
                bookHintScreen.classList.add("bookHint_Close");
                setTimeout(() => {
                    bookHintScreen.style.display = "none"
                    bookHintScreen.classList.remove("bookHint_Close");
                    isBookClicked = false;
                }, 2000);
            })
        }, 2000);
    }else{
        bookHintScreen.classList.add("bookHint_Close");
        setTimeout(() => {
            bookHintScreen.style.display = "none"
            bookHintScreen.classList.remove("bookHint_Close");
            isBookClicked = false;
        }, 2000);
    }

}

var submitPassword = document.getElementById("screen_password");
var screenSubmit = document.getElementById("screen_submit");
var textPassword = document.getElementById("text_password");
var screenCloseButton = document.getElementById("screen_close_button");
var passwordScreen = document.getElementById("screen");
function SumbitPassword(){
    stringPassword = submitPassword.value;
    if(stringPassword == "0126"){
        soundEfUseful("soundef_useful");
        submitPassword.style.display = "none"
        screenSubmit.style.display = "none"
        textPassword.style.display = "none"
        screenCloseButton.style.display = "none"

        passwordScreen.classList.add("backgroundToStage3");
        setTimeout(() => {
            ToTheStageFour();
            passwordScreen.style.display = "none"
            passwordScreen.classList.remove("backgroundToStage3");
        }, 2500);

    }else{
        soundEfUseful("soundef_useless");
    }
}