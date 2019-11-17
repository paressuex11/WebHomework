
var win = 0;
var lost = 0;
var starttt = 0;
function cheat(){
    $("#main").on("mouseleave", ()=>{alert("Don't cheat!")});
}

function end(){
    if(starttt == 1 && lost == 0){
    var result = document.getElementById("result");
    this.style.backgroundColor = "red";
    result.value = "You Lost";
    lost = 1;
    }
}

function start(){
    win = 0;
    lost = 0;
    starttt = 1;
    var main = document.getElementById("main");
    main.onmouseleave = ()=>{
        if (win == 1 || lost == 1);
        else {
            lost = 1;
            var result = document.getElementById("result");
            result.value = "Don't cheat";
        }
    };

    var result = document.getElementById("result");
    result.value = "Game Start";

    var walls = document.getElementsByClassName("wall");
    for (var i = 0; i < walls.length ; ++i){
       walls[i].onmouseenter = end
       walls[i].onmouseleave = function(){this.style.backgroundColor = "gray";};

    }


}


window.onload = ()=>{
    
    var startt = document.getElementById("start");
    var endd = document.getElementById("end");
    startt.onmouseenter = start;
    endd.onmouseenter = function(){
        if (lost == 0 &&starttt == 1) {
            win = 1;
            var result = document.getElementById("result");
            result.value = "You win";
            starttt = 0;
        }
    }



}