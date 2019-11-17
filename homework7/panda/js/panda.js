
var start = 0;
var pos_arr = [];
function swap(i, j){
    var divi = document.getElementById("div" + i);
    var divj = document.getElementById("div" + j);

    var temp_left = divi.offsetLeft;
    var temp_top = divi.offsetTop;

    divi.style.left = divj.offsetLeft + "px";
    divi.style.top = divj.offsetTop + "px";

    divj.style.left = temp_left + "px";
    divj.style.top = temp_top + "px";  

}

function setpos(i, j){
    var divi = document.getElementById("div" + i);
    var divj = document.getElementById("div" + j);

    divi.style.left = pos_arr[j - 1][0] + "px";
    divi.style.top = pos_arr[j - 1][1] + "px";

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
    document.getElementById("button").innerHTML = "开始";}
}

function game_start(){
    start = 1;
    for (var i = 1; i <= 16 ; ++ i){
        pos_arr.push([document.getElementById("div" + i).offsetLeft,document.getElementById("div" + i).offsetTop]);
    }

    var map = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    
    do{
        map.sort(()=> {return Math.random() > 0.5 ? 1 : -1;});
    }while(!check_random_isValid(map));

    for (var i = 0; i < map.length ; ++ i){
        setpos(i + 1, map[i]);
    }

    for(var i = 0; i < 15 ; ++ i){
        var temp = document.getElementById("div" + (i + 1));
        
        temp.onclick = function(i){
            return function(){
                var div16 = document.getElementById("div" + 16);
            if (((Math.abs(this.offsetLeft - div16.offsetLeft) <= 100) && (Math.abs(this.offsetTop - div16.offsetTop) == 0)) || ((Math.abs(this.offsetTop - div16.offsetTop) <= 100) && ((Math.abs(this.offsetLeft - div16.offsetLeft) == 0)))){
                swap(i + 1, 16);
                check();
            }}
        }(i);
    }
    document.getElementById("finish").onclick = function(){
        for(var i = 0; i < 16; ++ i){
            setpos(i + 1, i + 1);
            // document.getElementById("div" + (i + 1)).removeEventListener("click");
        }
        start = 0;
        document.getElementById("button").innerHTML = "开始";
    }



    
}


window.onload = function(){
    var button = document.getElementById("button");

    button.onclick = function(){
        if(start == 0){
            game_start();
            button.innerHTML = "重新开始";
        }
        else{
            game_start();
        }
    };



}