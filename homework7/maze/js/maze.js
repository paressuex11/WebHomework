
var win = 0;
var lost = 0;
var starttt = 0;
function cheat() {
    $("#main").on("mouseleave", () => { alert("Don't cheat!") });
}

function end() {
    if (starttt == 1 && lost == 0) {
        $("#result").val("You Lost");
        this.style.backgroundColor = "red";
        result.value = "You Lost";
        lost = 1;
    }
}

function start() {
    win = 0;
    lost = 0;
    starttt = 1;
    $("#main").on("mouseleave", () => {
        if (win == 1 || lost == 1);
        else {
            lost = 1;
            $("#result").val("Don't cheat");
        }
    })
    $('#result').val("Game Start");
    $('.wall').on("mouseleave", function () {
        $(this).css({ "background-color": "gray" });
    }).on("mouseenter", end);
}


$(function () {
    $("#start").on("mouseenter", start);
    $("#end").on("mouseenter", function () {
        if (lost == 0 && starttt == 1) {
            win = 1;
            $("#result").val("You Win!")
            starttt = 0;
        }
    });
});