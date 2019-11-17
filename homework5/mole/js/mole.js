function timer(){
    setInterval(function(){
        var timee = document.getElementById("time");
        var timee_int = eval(timee.value);
        if (timee_int == 0) return;
        timee.value = String(timee_int-1);
    },1000);
    setInterval(end,30000);
}

function gene_mole(){
    var ran = Math.round(Math.random() * 60);
    var moles = document.getElementsByName("mole");
    moles[ran].style.opacity = 1;
}

function add_score(){
    var score = document.getElementById("score");
    var score_int = eval(score.value);
    score.value = String(score_int + 1);
}



function clickmole(){
    if (this.style.opacity == 1){
        this.style.opacity = 0.1;
        gene_mole();
        add_score();
        return ;
    }
    return ;
}

function start(){
    var status = document.getElementById("gamestatus");
    gamestatus.value = "Game Start";
    var button = document.getElementById("gamebutton");
    button.innerHTML = "End Game";
    var moles = document.getElementsByName("mole");
    for (var i = 0; i < moles.length ; ++ i){
        moles[i].onclick = clickmole;
    }

    timer();
    gene_mole();
}

function end(){
    var status = document.getElementById("gamestatus");
    gamestatus.value = "Game Over";
    var button = document.getElementById("gamebutton");
    button.innerHTML = "Start Game";
    var moles = document.getElementsByName("mole");
    for (var i = 0; i < moles.length ; ++ i){
        moles[i].style.opacity = 0.1;
    }
    var time = document.getElementById("time");
    time.value = "0";
}

window.onload = () =>{
    var button = document.getElementById("gamebutton");
    button.onclick = () => {
        if (button.innerHTML == "Start Game") start();
        else end();
    };
    

    
}