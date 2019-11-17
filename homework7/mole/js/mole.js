function timer(){
    $("#time").val(30);
    setInterval(function(){
        // var timee = document.getElementById("time");
        var timee_int = eval($("#time").val());
        if (timee_int == 0) return;
        $("#time").val(timee_int-1);
    },1000);
    setInterval(end,30000);
}

function gene_mole(){
    var ran = Math.round(Math.random() * 60);
    $("input[name=mole]").eq(ran).css("opacity","1");
}

function add_score(){
    $("#score").val(parseInt($("#score").val()) + 1);
}

function clickmole(){
    if ($(this).css("opacity") == 1){
        $(this).css("opacity", 0.1)
        gene_mole();
        add_score();
        return ;
    }
    return ;
}

function start(){
    $("#gamestatus").val("Game Start");
    $("#gamebutton").text("End Game");
    $("input[name=mole]").on("click", clickmole);
    timer();
    gene_mole();
}

function end(){
    $("#gamestatus").val("Game Over");
    $("#gamebutton").text("Start Game");
    $("input[name=mole]").each(function (index, elem) {
        $(elem).css("opacity", 0.1);
    });
    $("#time").val(0);
}
window.onload = () =>{
    $("#gamebutton").on("click", function() {
        if ($(this).text() == "Start Game") start();
        else end();
    });
}