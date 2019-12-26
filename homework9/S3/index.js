function button_show() {
    if ($(this).attr("button_able") == "true")
        $(this).css("opacity", 1);
}
function button_fade() {
    if ($(this).attr("button_able") == "true")
        $(this).css("opacity", 0.5);
}
function init() {
    $("#button > div.apb").attr("button_clicked", false);
    $("#control-ring li").each(function (index, elem) {
        $(elem).attr("button_able", true);
        $(elem).attr("get_value", false);
        $(elem).hover(button_show, button_fade);
        $(elem).click(function () {
            if ($(this).attr("button_able") == "true") {
                $(this).attr("button_able", false).find(".unread").css({ opacity: 1 }).text("...");
                if ($("#button > div.apb").attr("button_clicked") != "true") $("#control-ring li").not($(this)).attr("button_able", false);
                $.ajax({
                    url: "http://localhost:3000",
                    type: "GET",
                    success: function (data) {
                        if ($("#button").attr("reset") != "true") {
                            $(elem).find(".unread").text(data).end().css({ opacity: 1 }).attr("get_value", true);
                            $("#control-ring li[get_value!=true]").attr("button_able", true);
                            if ($("#control-ring li[get_value!=true]").length == 0) {
                                $("#info-bar").attr("button_able", true);
                                if ($("#button > div.apb").attr("button_clicked") == "true") $("#info-bar").click();
                            }
                        }
                    }
                });
            }
        });
    });
    $("#info-bar").attr("button_able", false);
    $("#info-bar").hover(button_show, button_fade);
    $("#info-bar").click(function () {
        if ($(this).attr("button_able") == "true") {
            var sum = 0;
            $("#control-ring li").each(function (index, elem) {
                sum += parseInt($(elem).find(".unread").text());
            });
            $("#info-bar").find("span").text(sum);
            $(this).attr("button_able", false).css({ opacity: 1 });
        }
    });
    $("#button").hover(function () {
        $("#button").attr("reset", "false");
        $("#control-ring li").css("opacity", 0.5);
        $("#info-bar").css("opacity", 0.5);
    }, function () {
        reset();
        $("#control-ring li").css("opacity", 0);
        $("#info-bar").css("opacity", 0);
    });
    $("#button > div.apb").click(function () {
        $("#button > div.apb").attr("button_clicked", true);
        setTimeout(function () {
            $("#control-ring li").eq(0).click();
        }, 0);
        setTimeout(function () {
            $("#control-ring li").eq(1).click();
        }, 0);
        setTimeout(function () {
            $("#control-ring li").eq(2).click();
        }, 0);
        setTimeout(function () {
            $("#control-ring li").eq(3).click();
        }, 0);
        setTimeout(function () {
            $("#control-ring li").eq(4).click();
        }, 0);
    });
}

function reset() {
    $("#button > div.apb").attr("button_clicked", false);
    $("#button").attr("reset", "true");
    $("#info-bar").attr("button_able", false).find("span").text("");
    $("#control-ring li").attr("button_able", true).attr("get_value", false).find(".unread").text("").css("opacity", 0);
}
$(document).ready(function () {
    // $("#button:hover #control-ring li").hover(function(){
    //     $(this).css({capacity:1});
    // });
    init();

});