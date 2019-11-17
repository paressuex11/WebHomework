window.onload = function(){
    var output = document.getElementById("output");
    var buttons = document.getElementsByTagName("button");
    
    buttons[0].onclick = function(){
        output.value+=buttons[0].innerHTML;
    };
    buttons[1].onclick = function(){
        output.value+=buttons[1].innerHTML;
    };
    buttons[2].onclick = function(){
        output.value += this.innerHTML;
    };
    buttons[4].onclick = function(){
        output.value+=buttons[4].innerHTML;
    };
    buttons[5].onclick = function(){
        output.value+=buttons[5].innerHTML;
    };
    buttons[6].onclick = function(){
        output.value+=buttons[6].innerHTML;
    };
    buttons[8].onclick = function(){
        output.value+=buttons[8].innerHTML;
    };
    buttons[9].onclick = function(){
        output.value+=buttons[9].innerHTML;
    };
    buttons[10].onclick = function(){
        output.value+=buttons[10].innerHTML;
    };
    buttons[3].onclick = function(){
        output.value+=buttons[3].innerHTML;
    };
    buttons[7].onclick = function(){
        output.value+=buttons[7].innerHTML;
    };
    buttons[11].onclick = function(){
        output.value+=buttons[11].innerHTML;
    };
    buttons[12].onclick = function(){
        output.value+=buttons[12].innerHTML;
    };
    buttons[13].onclick = function(){
        output.value+=buttons[13].innerHTML;
    };
    buttons[14].onclick = function(){
        if (output.value.length == 1) output.value = "";
        else{
            output.value = output.value.substring(0, output.value.length - 1);
        }
    };
    buttons[15].onclick = function(){
        output.value+=buttons[15].innerHTML;
    };
    buttons[16].onclick = function(){
        output.value+=buttons[16].innerHTML;
    };

    buttons[17].onclick = function(){
        output.value+=buttons[17].innerHTML;
    };
    buttons[18].onclick = function(){
        output.value = "";
    };
    buttons[19].onclick = function(){
        try {
            if (output.value == ""){ output.value = "（づ￣3￣）づ╭❤～"; return;}
            output.value = eval(output.value);
        } catch (error) {
            alert("Wrong Expression");
        }
        if (output.value == "233333"){
            output.value = "♪(^∇^*)";
        }
        if (output.value == "18342106"){
            output.value = "o(￣ヘ￣o＃)";
        }
        if (output.value == "520"){
            output.value = "ヽ(✿ﾟ▽ﾟ)ノ";
        }
        if (output.value == "4399"){
            output.value = "︿(￣︶￣)︿";
        }
    };

}
