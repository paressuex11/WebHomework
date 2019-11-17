var start = 0;
var pos_arr = [];
function swap(i, j){

    var divi_top = $("#div" + i).css("top");
    var divi_left = $("#div" + i).css("left");

    $("#div" + i).css({
        "left": $("#div"+j).css("left"),
        "top": $("#div"+j).css("top")
    });
    
    $("#div" + j).css({
        "left": divi_left,
        "top": divi_top
    });

}

function setpos(i, j){
    $("#div" + i).css({
        "left": pos_arr[j - 1][0] + "px",
        "top": pos_arr[j - 1][1] + "px"
    });

}

function check_random_isValid(random_arr) {
    var count = 0;
    for (var i = 0; i < 16; i++) {
        for (var j = i+1; j < 16; j++) {
            if (random_arr[j] < random_arr[i]) {
                count++;
            }
        }
    }
    return count%2===0;
}

function check(){
    if (start == 1){
    for (var i = 0; i < 16 ; ++ i){
        var temp = document.getElementById("div" + (i + 1));
        if (temp.offsetLeft != pos_arr[i][0] || temp.offsetTop != pos_arr[i][1]) return ;
    }
    alert("You Win!");
    $("#button").val("开始");
    }
}

function game_start(){
    start = 1;
    for (var i = 1; i <= 16 ; ++ i){
        pos_arr.push([$("#div" + i).position().left,$("#div" + i).position().top]);
    }

    var map = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    
    do{
        map.sort(()=> {return Math.random() > 0.5 ? 1 : -1;});
    }while(!check_random_isValid(map));

    for (var i = 0; i < map.length ; ++ i){
        setpos(i + 1, map[i]);
    }

    $("div").each(function(index, elem){
        $(elem).on("click", function(index){
            return function(){
                var div16 = document.getElementById("div" + 16);
            if (((Math.abs(this.offsetLeft - div16.offsetLeft) <= 100) && (Math.abs(this.offsetTop - div16.offsetTop) == 0)) || ((Math.abs(this.offsetTop - div16.offsetTop) <= 100) && ((Math.abs(this.offsetLeft - div16.offsetLeft) == 0)))){
                swap(index + 1, 16);
                check();
            }}
        }(index));
    });

    $("#finish").on("click", function(){
        for(var i = 0; i < 16; ++ i){
            setpos(i + 1, i + 1);
        }
        start = 0;
        $("#button").text("开始");
    });
}


window.onload = function(){
    $("#button").on("click", function(){
        if(start == 0){
            game_start();
            $(this).text("重新开始");
        }
        else{
            game_start();
        }
    });
}